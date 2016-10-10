import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarPartsComponent } from './car-parts.component';
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CarPartsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }