import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Beer</h1>
      <h3>{{currentFocus}}</h3>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (AnotherClickSender)="deleteKeg($event)"></keg-list>
      <hr>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
      <delete-keg [deleteSelectedKeg]="selectedKeg" (confirmButtonClickedSender)="finishedEditing()"></delete-keg>
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
      <show-aaron (aaronSender)="showAaron($event)"> <p>FUCK OFF</p> </show-aaron>
      {{aaron}}

    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Epicodus Tap Room'
  selectedKeg = null;
  masterKegList: Keg[] = [
    new Keg('Brown Ale', 'New Castle', 5, 5.6),
    new Keg('Belgian White', 'Hoegarten',6, 3.7),
    new Keg('Stout', 'Ninkasi',4, 7.1)
  ];
  aaron: string = "nothing"
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  deleteKeg(deleteKeg) {

    this.masterKegList.splice(this.masterKegList.indexOf(deleteKeg), 1);
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  showAaron(newAaron) {
    this.aaron= newAaron
  }

}
