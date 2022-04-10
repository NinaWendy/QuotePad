import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysCounter'
})
export class DaysCounterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
