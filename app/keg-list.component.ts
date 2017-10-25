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
  <li (click)="isDone(currentKeg)" *ngFor="let currentKeg of childKegList | fullness:filterByfullness">{{currentKeg.name}}, {{currentKeg.brand}} Price: {{currentKeg.price}} ABV: {{currentKeg.abv}} <span *ngIf="displayPints === true">Pints left: {{currentKeg.pints}}</span>
    <button (click)="replaceDone(currentKeg, 124)"> Replace Keg </button>
    <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>

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

  replaceDone(clickedKeg: Keg, replaceKeg: number) {
   clickedKeg.pints = replaceKeg;
 }

  isDone(clickedKeg: Keg) {
    if(clickedKeg.pints === 0) {
      alert("This keg is empty!");
    } else {
      alert("This keg is not empty. Better get drinkin!");
    }
  }

  displayType(optionFromMenu) {
    if (optionFromMenu === "employee") {
      this.displayPints = true;
    }else {
      this.displayPints = false;
    }
  }

  priorityColor(currentKeg){
    if (currentKeg.pints <= 10){
      return "bg-danger";
    } else {
      return "bg-info";
    }
  }
}
