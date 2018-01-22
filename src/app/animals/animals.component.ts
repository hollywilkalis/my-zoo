import { Component, OnInit, Input, Output } from '@angular/core';
import { Animal } from '../app.component';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {

  @Input() childAnimals: Animal[] = [];
  @Input() childDisplay: boolean = true;
  @Input() filter: number;

  selectedAnimal: Animal = null;


  constructor() {}

  // display: boolean = false;

  ngOnInit() {
  }

  // toggle() {
  //   this.childDisplay = !this.childDisplay;
  // }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
    this.childDisplay = true;
  }


}
