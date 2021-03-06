import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { KegListComponent }  from './keg-list.component';
import { NewKegComponent } from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';
import { FullnessPipe } from './fullness.pipe';
import { IncludesPipe } from './includes.pipe';
import { DeleteKegComponent } from './delete-keg.component';



@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, KegListComponent, NewKegComponent, EditKegComponent, FullnessPipe, DeleteKegComponent, IncludesPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
