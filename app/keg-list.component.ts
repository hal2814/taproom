import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)"(change)="displayType($event.target.value)">
    <option value="fullKegs">Patron Menu</option>
    <option value="employee">Employee list</option>
  </select>
<ul>
  <li *ngFor="let currentKeg of childKegList | fullness:filterByfullness"><h3>{{currentKeg.name}}</h3> <h4>{{currentKeg.brand}}</h4> <h4><span [class]="priceColor(currentKeg)">Price: $ {{currentKeg.price}} </span></h4> <h4><span [class]="abvColor(currentKeg)">ABV: {{currentKeg.abv}}%</span></h4> <h4><span [class]= "pintColor(currentKeg)"  *ngIf="displayPints === true">Pints left: {{currentKeg.pints}}</span></h4>
    <button (click)="replaceDone(currentKeg, 124)"> Replace Keg </button>
    <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
    <button *ngIf="displayPints === true" (click)="sellPint(currentKeg)">Sell A Pint</button>


    <button class="btn btn-warning" (click)="replaceDone(currentKeg, 9)"> Sell A LOT of Beer </button>
  </li>
</ul>
`
})

export class KegListComponent {

  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByfullness: string = "fullKegs";
  displayPints: boolean = false;

  onChange(optionFromMenu) {
  this.filterByfullness = optionFromMenu;

}

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  deleteButtonClicked(kegToDelete: Keg) {
    this.clickSender.emit(kegToDelete);
  }

  replaceDone(clickedKeg: Keg, replaceKeg: number) {
   clickedKeg.pints = replaceKeg;
 }

 sellPint(clickedKeg: Keg) {
   clickedKeg.pints -= 1;
 }

  // isDone(clickedKeg: Keg) {
  //   if(clickedKeg.pints === 0) {
  //     alert("This keg is empty!");
  //   } else {
  //     alert("This keg is not empty. Better get drinkin!");
  //   }
  // }

  displayType(optionFromMenu) {
    if (optionFromMenu === "employee") {
      this.displayPints = true;
    }else {
      this.displayPints = false;
    }
  }

  pintColor(currentKeg){
    if (currentKeg.pints <= 10){
      return "bg-danger";
    } else {
      return "bg-success";
    }
  }

  priceColor(currentKeg){
    if (currentKeg.price <= 5){
      return "bg-success";
    } else if(currentKeg.price >= 6 && currentKeg.price <= 9) {
      return "bg-info";
    } else if(currentKeg.price >= 10) {
      return "bg-warning";
    }
  }

  abvColor(currentKeg){
    if (currentKeg.abv <= 4.0){
      return "bg-success";
    } else if(currentKeg.abv >= 5.0 && currentKeg.abv <= 8.0) {
      return "bg-warning";
    } else if(currentKeg.abv >= 8.1) {
      return "bg-danger";
    }
  }
}
