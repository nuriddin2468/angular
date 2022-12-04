import { Component, OnInit } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { coursesMock } from '@app/testing/courses.mock';
import { FilterPipe } from '@shared/pipes/filter/filter.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [...coursesMock];
  private backup = [...coursesMock]

  constructor(
    private filterPipe: FilterPipe
  ) { }

  ngOnInit(): void {
  }

  trackByIdentity(index: number, item: Course): number {
    return item.id;
  }

  search(text: string) {
    this.courses = this.filterPipe.transform(this.backup, text);
  }
}
