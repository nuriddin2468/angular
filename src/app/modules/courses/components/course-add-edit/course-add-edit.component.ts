import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '@modules/courses/types/course';
import { Store } from '@ngrx/store';
import { CoursesActions } from '@modules/courses/+state/actions';
import { selectAuthors, selectSelectedCourse } from '@modules/courses/+state/reducers';
import { filter, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Author } from '@modules/courses/types/author';

@UntilDestroy()
@Component({
  selector: 'app-course-add',
  templateUrl: './course-add-edit.component.html',
  styleUrls: ['./course-add-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddEditComponent implements OnInit {

  form = this.fb.group({
    id: [],
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    date: ['', [Validators.required]],
    length: [0, [Validators.required, Validators.min(10)]],
    authors: this.fb.control<Author[]>([], [Validators.required]),
    isTopRated: [false]
  });

  get controls() {
    return this.form.controls;
  }

  authorsList$ = this.store.select(selectAuthors);

  currentCourseId = this.getId() || null;

  showError = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(CoursesActions.enterToAddEditCoursePage({ courseId: this.currentCourseId }));
    this.store.select(selectSelectedCourse).pipe(
      filter(Boolean),
      tap(course => this.seedForm(course)),
      untilDestroyed(this)
    ).subscribe();
  }

  private getId(): string | undefined {
    const { id } = this.route.snapshot.params;
    return id;
  }

  private seedForm(course: Course): void {
    this.form.setValue({
      id: course.id,
      name: course.name,
      description: course.description,
      length: course.length,
      date: new Date(course.date).toString(),
      authors: course.authors,
      isTopRated: false
    });
  }

  save(): void {
    this.showError = true;
    if (this.form.invalid) return;
    this.showError = false;
    const course = this.form.value as Course;
    this.currentCourseId === null ?
      this.store.dispatch(CoursesActions.createCourse({ course }))
      : this.store.dispatch(CoursesActions.updateCourse({ course }));
    this.navigateToMainPage();
  }

  navigateToMainPage() {
    this.router.navigate(['/courses']);
  }
}
