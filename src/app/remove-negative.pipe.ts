import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeNegative'
})
export class RemoveNegativePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    return Math.abs(value);
  }

}
