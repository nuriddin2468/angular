import { Component, OnInit } from '@angular/core';
import { Course } from '@modules/courses/types/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {
      id: 1,
      title: 'Video Course 1. Name tag',
      duration: '1h 28min',
      creationDate: '06/28/2020',
      description: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
    },
    {
      id: 2,
      title: 'Video Course 2. Name tag',
      duration: '2h 8min',
      creationDate: '02/12/2021',
      description: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  trackByIdentity(index: number, item: Course): number {
    return item.id;
  }

}
