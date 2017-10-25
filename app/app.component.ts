import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template:
  `
  <div class="container">
     <h3>{{currentFocus}}</h3>

     <employee-list></employee-list>
     <patron-list></patron-list>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Epicodus Tap Room'
}
