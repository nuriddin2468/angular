import { Component, OnInit } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoursesActions } from '@modules/courses/+state/actions';
import { Observable } from 'rxjs';
import { selectAllCourses } from '@modules/courses/+state/reducers';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private router: Router,
    private store: Store
  ) {
    this.courses$ = this.store.select(selectAllCourses);
  }

  ngOnInit(): void {
    this.store.dispatch(CoursesActions.enter());
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
