import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): unknown {
    const date = new Date(0);
    date.setMinutes(0);
    date.setHours(0);
    date.setMinutes(value);
    const hours = date.getHours();
    let minutes = `${date.getMinutes()}`;
    if (Number(minutes) < 10) minutes = '0' + minutes;
    return hours ? `${hours}h ${minutes} min`: `${minutes} min`;
  }

}
