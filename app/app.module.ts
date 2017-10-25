import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { EmployeeListComponent } from './employee-list.component';
import { PatronListComponent } from './patron-list.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EmployeeListComponent, PatronListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
