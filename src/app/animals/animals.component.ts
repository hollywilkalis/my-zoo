import { Component, OnInit, Input, Output} from '@angular/core';
import { Animal } from '../app.component';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {

  @Input() childAnimals: Animal[]; //brings in animal array as childAnimals
  // @Input() childDisplay: boolean = true;
  @Input() filter: number;

  selectedAnimal: Animal;

  constructor() {}

  ngOnInit() {
    console.log(this.childAnimals);
    console.log(this.selectedAnimal);

  }

  editAnimal(animal: Animal): void {
    this.selectedAnimal = animal;
    debugger
    // this.childDisplay = true;

  }


}
