import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockSelect'
})
export class StockSelectPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let stock: number = args[0].stock;
    let countArry = [];

    for(let i=1; i<=stock; i++) {
      countArry.push(i);
    }

    return countArry;
    
  }

}
