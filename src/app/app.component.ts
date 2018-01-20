import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'My Zoo';

  animals: Animal[] = [
    new Animal('Ocelot', 'Prince', 4, 'carnivore', 'Tropical Rain Forest Building', 6, 'male', 'laying in the sunshine', 'toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'carnivore', 'Northern Trail', 2, 'female', 'roots and leaves', 'loud noises'),
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "male", "toys", 'Loud noises')
  ];
}

export class Animal {
  constructor (
    public name: string,
    public species: string,
    public age: number,
    public diet: string,
    public location: string,
    public caretakers: number,
    public sex: string,
    public likes: string,
    public dislikes: string
  ) { }
}
