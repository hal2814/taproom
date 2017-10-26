import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'show-aaron',
  template: `
  <input #newAaron>
  <button (click)="submitForm(newAaron.value)">Button</button>
`
})

export class ShowAaronComponent {
  @Output() aaronSender = new EventEmitter();

  submitForm(newAaron) {
    this.aaronSender.emit(newAaron)
  }
}
