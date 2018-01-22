import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './app.component';
@Pipe({
  name: 'ageFilter'
})
export class AgeFilterPipe implements PipeTransform {
  transform(input: Animal[], filter) {
    var output: Animal[] = [];
    if(filter === 0) {
      return input;
    } else if(filter === 2) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(filter === 3) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
