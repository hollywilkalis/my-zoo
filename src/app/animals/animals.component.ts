import { Component, OnInit, Input, Output} from '@angular/core';
import { Animal } from '../app.component';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {

  @Input() childAnimals: Animal[]; //RECEIVES ANIMAL ARRAY
  @Input() filter: number;

  selectedAnimal: Animal;

  constructor() {}

  ngOnInit() {

  }

  editAnimal(animal: Animal): void { 
    this.selectedAnimal = animal;
  }


}
