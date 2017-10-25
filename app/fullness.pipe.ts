import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "fullness",
  pure: false
})


export class fullnessPipe implements PipeTransform {
  transform(input: Keg[], kegState) {
     var output: Keg[] = [];
     if(kegState === "emptyKegs") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].pints <= 10) {
           output.push(input[i]);
         }
       }
       return output;
     } else if (kegState === "fullKegs") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].pints >= 11) {
           output.push(input[i]);
         }
       }
       return output;
     } else {
       return input;
     }
   }

}
