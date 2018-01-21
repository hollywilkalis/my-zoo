import { Component, OnInit, Input, Output } from '@angular/core';
import { Animal } from '../app.component';
// import { ANIMALS } from '../sample-animals';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {

  @Input() childAnimals: Animal[];

  selectedAnimal: Animal = null;

  constructor() {}

  ngOnInit() {
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  // onSelect(animal: Animal): void {
  //   this.selectedAnimal = animal;
  // }

}
