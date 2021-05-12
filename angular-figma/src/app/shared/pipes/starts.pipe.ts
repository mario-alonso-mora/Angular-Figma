import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starts'
})
export class StartsPipe implements PipeTransform {

  transform(value: number): number {
    return value * 20;
  }

}
