import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
 <div>
   <label>Enter Keg Name:</label>
   <input #newName>
 </div>
 <div>
  <label>Keg Brand:</label>
  <input #newBrand>
  </div>
  <div>
    <label>Enter Keg Price:</label>
    <input #newPrice>
  </div>
  <div>
    <label>Enter Keg Alcohal by volume:</label>
    <input #newAbv>
  </div>
  <button (click)="submitForm(newName.value, newPrice.value, newAbv.value, newBrand.value); newName.value=''; newBrand.value=''; newPrice.value=0; newAbv.value=0.0;">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, abv: number) {
    var newKegToAdd: Keg = new Keg(name,brand,price,abv);
    this.newKegSender.emit(newKegToAdd);
  }
}
