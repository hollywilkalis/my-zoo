import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {
  animal: Animal = {
  species: "Arctic Fox",
  name: "Moon",
  age: 2,
  diet: "Carnivore",
  location: "Northern Trail",
  caretakers: 5,
  sex: "female",
  likes: "Cool shade",
  dislikes: "Loud noises",
};
  constructor() { }

  ngOnInit() {

  }

}
