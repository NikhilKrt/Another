import { SevaService } from './seva.service';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  constructor(public apiHttpService: SevaService) { }
  transform(value: any, searchtext:string): any {
    if (!searchtext)
      return value;
   return value.filter(it => {
     let optionalData = it.name ? it.name : it.aliases[0]
      return optionalData.toLowerCase().includes(searchtext.toLowerCase());

    });

  }
}