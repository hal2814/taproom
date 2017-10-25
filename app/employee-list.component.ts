import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'employee-list',
  template: `
  <h1>esfklds;mployee</h1>
  <h3>{{currentFocus}}</h3>
  <p *ngFor = "let beer of tapList">{{beer.name}}, {{beer.brand}}, {{beer.price}}, {{beer.abv}}, {{beer.pints}}</p>
  <p>jfdsklj</p>
  `
})

export class EmployeeListComponent {
  currentFocus: string = 'Epicodus Tap Room'
  tapList: Keg[] = [
    new Keg('Swill', 'sjdfklds', 99.99, 13)
  ]
}
