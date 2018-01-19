import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animal';
import { ANIMALS } from '../sample-animals';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {
  animals = ANIMALS;

  selectedAnimal: Animal;

  @Input() animal: Animal;

  constructor() { }

  ngOnInit() {
  }

  onSelect(animal: Animal): void {
    this.selectedAnimal = animal;
  }
}
