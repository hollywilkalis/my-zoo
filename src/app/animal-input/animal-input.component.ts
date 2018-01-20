import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

// import { Animal } from '../animal';
import { ANIMALS } from '../sample-animals';
import { Animal } from '../app.component';

@Component({
  selector: 'app-animal-input',
  templateUrl: './animal-input.component.html',
  styleUrls: ['./animal-input.component.css']
})
export class AnimalInputComponent implements OnInit {

  @Input() animals: Animal[];

  constructor() { }

  ngOnInit() {
  }

  add(name, species, age, diet, location, caretakers, sex, likes, dislikes){
    const newAnimal: Animal = new Animal(name, species, age, diet, location, caretakers, sex, likes, dislikes);
    this.animals.push(newAnimal);
    console.log(newAnimal);
  }
}
