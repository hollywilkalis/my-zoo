import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Zoo';

  animals: Animal[] = [ //SAMPLE ANIMAL ARRAY
    new Animal('Prince', 'Ocelot', 'Tropical Rain Forest Building', 4, 'carnivore', 6, 'male', 'laying in the sunshine', 'toys that are not rope-based'),
    new Animal('Tinkerbell', 'Northwest Black Tailed Deer', 'Northern Trail', 1, 'carnivore', 2, 'female', 'roots and leaves', 'loud noises'),
    new Animal("Moon", "Arctic Fox", "Northern Trail", 2, "Carnivore", 5, "male", "toys", 'Loud noises')
  ];

  filterByAge: number = 0; //SETS DEFAULT

  onChange(optionFromMenu) {
    this.filterByAge = parseInt(optionFromMenu);
  }
}

export class Animal { //ANIMAL CONSTRUCTOR
  constructor (
    public name: string,
    public species: string,
    public location: string,
    public age: number,
    public diet: string,
    public caretakers: number,
    public sex: string,
    public likes: string,
    public dislikes: string
  ) { }
}
