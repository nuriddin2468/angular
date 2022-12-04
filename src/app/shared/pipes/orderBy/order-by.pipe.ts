import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@modules/courses/types/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Course[], direction: 'asc' | 'desc' = 'asc'): Course[] {
    return courses.sort((prev, next) => {
      const prevTime = new Date(prev.creationDate);
      const nextTime = new Date(next.creationDate);
      if (prevTime < nextTime) return direction === 'asc' ? 1 : -1;
      if (prevTime > nextTime) return direction === 'asc' ? -1 : 1;
      return 0;
    })
  }

}
