import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "includes",
  pure: false
})

export class IncludesPipe implements PipeTransform {
  transform(input: Keg[], beerType) {
    var output: Keg[] =[];
    if(beerType === "all"){
      return input;
    }else{
      for(var i = 0;i<input.length;++i){
        if (input[i].name.toLowerCase() === beerType.toLowerCase()){
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
