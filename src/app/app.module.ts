import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalInputComponent } from './animal-input/animal-input.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
