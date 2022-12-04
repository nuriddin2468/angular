import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  starIcon = faStar;

  constructor() { }

  ngOnInit(): void {
  }
}
