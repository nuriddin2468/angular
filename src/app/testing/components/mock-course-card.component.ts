import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@modules/courses/types/course';

@Component({
  selector: 'app-course-card',
  template: '',
  styles: []
})
export class MockCourseCardComponent {
  @Input() course: Course;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
}
