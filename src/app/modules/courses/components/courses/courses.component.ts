import { Component, OnInit } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoursesActions, CoursesSelectors } from '@modules/courses/+state';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$ = this.store.select(CoursesSelectors.selectAllCourses);

  constructor(
    private router: Router,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(CoursesActions.enterToCoursesPage());
  }

  trackByIdentity(index: number, item: Course): number {
    return item.id;
  }

  search(searchText: string) {
    this.store.dispatch(CoursesActions.searchCourses({ searchText }));
  }

  deleteCourse(course: Course) {
    this.store.dispatch(CoursesActions.deleteCourse({ course }));
  }

  editCourse(course: Course) {
    this.router.navigate(['/courses/', course.id]);
  }

  loadMore(): void {
    this.store.dispatch(CoursesActions.loadMoreCourses());
  }
}
