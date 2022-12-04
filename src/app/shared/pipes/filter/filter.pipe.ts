import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@modules/courses/types/course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], name: string): Course[] {
    return courses.filter(course => course.title.includes(name));
  }

}
