import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  @Input() course: Course;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  starIcon = faStar;
}
