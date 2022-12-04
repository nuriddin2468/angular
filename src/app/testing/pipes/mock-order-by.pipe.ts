import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@modules/courses/types/course';

@Pipe({
  name: 'orderBy'
})
export class MockOrderByPipe implements PipeTransform {

  transform(courses: Course[]): Course[] {
    return courses;
  }

}
