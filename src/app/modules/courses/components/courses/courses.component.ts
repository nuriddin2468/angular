import { Component, OnInit } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { coursesMock } from '@app/testing/courses.mock';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [...coursesMock];

  constructor() { }

  ngOnInit(): void {
  }

  trackByIdentity(index: number, item: Course): number {
    return item.id;
  }

}
