import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockSelect'
})
export class StockSelectPipe implements PipeTransform {

  transform(value: any, stock: number): any {

    let countArry = [];

    for(let i=1; i<=stock; i++) {
      countArry.push(i);
    }

    return countArry;
    
  }

}
