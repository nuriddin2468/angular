import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@modules/courses/types/course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], name: string): Course[] {
    if (!courses || courses.length === 0) return [];
    return courses.filter(course => course.name.includes(name));
  }

}
