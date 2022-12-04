import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class MockDurationPipe implements PipeTransform {

  transform(value: number): string {
    return '';
  }

}
