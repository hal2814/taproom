import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'delete-keg',
  template: `
    <div>
        <div *ngIf="childSelectedKeg">
        <h3>Delete Keg?</h3>
          <h3>{{childSelectedKeg.name}}</h3>
          <p>{{childSelectedKeg.brand}}</p>


          <button (click)="deleteButtonClicked()">Confirm</button>
        </div>
      </div>
  `
})

export class DeleteKegComponent {
  @Input() deleteSelectedKeg: Keg;
  @Output() confirmButtonClickedSender = new EventEmitter();

  confirmButtonClicked() {
    this.confirmButtonClickedSender.emit();
  }
}
