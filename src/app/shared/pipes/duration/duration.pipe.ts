import { Pipe, PipeTransform } from '@angular/core';
import { padZero } from '@shared/utils/utils';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const date = new Date(0);
    date.setMinutes(0);
    date.setHours(0);
    date.setMinutes(value);
    const hours = date.getHours();
    let minutes = `${date.getMinutes()}`;
    if (Number(minutes) < 10) minutes = padZero(minutes);
    return hours ? `${hours}h ${minutes} min`: `${minutes} min`;
  }

}
