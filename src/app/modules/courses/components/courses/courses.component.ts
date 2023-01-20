import { Component, OnInit } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { CoursesService } from '@modules/courses/services/courses.service';
import { Dialog } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy(this)
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  readonly eachRowCount = 5;
  readonly maxCount = 30;
  courses: Course[] = [];
  private searchValue: string;

  constructor(
    private coursesService: CoursesService,
    private dialogService: Dialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.coursesService.clearCourses();
    this.coursesService.getCourses().pipe(untilDestroyed(this)).subscribe(res => this.courses = res);
    this.fetchCourses();
  }

  trackByIdentity(index: number, item: Course): number {
    return item.id;
  }

  search(text: string) {
    this.searchValue = text;
    this.fetchCourses(0, false);
  }

  deleteCourse(courseId: number) {
    this.coursesService
      .removeCourse(courseId)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.fetchCourses(0, false));
  }

  editCourse(courseId: number) {
    this.router.navigate(['/courses/', courseId]);
  }

  fetchCourses(start = 0, shouldSavePrev = true): void {
    this.coursesService
      .fetchCourses(this.eachRowCount, start, this.searchValue, shouldSavePrev)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
