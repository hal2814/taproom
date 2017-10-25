import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'delete-keg',
  template: `
    <div>
        <div *ngIf="childSelectedKeg">
          <h3>{{childSelectedKeg.name}}</h3>
          <p>{{childSelectedKeg.brand}}</p>
          <hr>
          <h3>Delete Keg?</h3>

          <button (click)="deleteButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() deleteButtonClickedSender = new EventEmitter();

  deleteButtonClicked() {
    this.deleteButtonClickedSender.emit();
  }
}
