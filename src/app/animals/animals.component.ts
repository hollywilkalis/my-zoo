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
  @Input() childDisplay: boolean;

  selectedAnimal: Animal = null;

  constructor() {}

  ngOnInit() {
  }

  toggle() {
    this.childDisplay = !this.childDisplay;
  }
  
  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
    this.childDisplay = true;
  }


}
