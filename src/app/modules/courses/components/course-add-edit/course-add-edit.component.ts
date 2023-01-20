import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '@modules/courses/services/courses.service';
import { Course } from '@modules/courses/types/course';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Author } from '@modules/courses/types/author';
import { Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-course-add',
  templateUrl: './course-add-edit.component.html',
  styleUrls: ['./course-add-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddEditComponent implements OnInit {

  form = this.fb.group({
    name: [],
    description: [],
    length: [],
    date: [],
    authors: []
  });

  isNew = true;

  authorsList: Author[] = [];

  private  currentCourseId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.coursesService
      .getAuthors()
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.authorsList = res;
        if (this.getId() !== undefined) {
          this.seedForm(Number(this.getId()));
        }
        this.cdr.markForCheck();
      });
  }

  private getId(): string | undefined {
    const { id } = this.route.snapshot.params;
    return id;
  }

  private seedForm(id: number): void {
    this.coursesService.getCourse(id).subscribe(res => {
      this.form.setValue({
        name: res.name,
        description: res.description,
        length: res.length,
        date: new Date(res.date),
        authors: this.authorsList.filter(author => res.authors.findIndex(x => x.id === author.id) !== -1)
      });
      this.currentCourseId = res.id;
      this.isNew = false;
      this.cdr.markForCheck();
    });
  }

  save(): void {
    const obs$ = this.isNew ? this.saveNew() : this.saveExist();
    obs$.subscribe(() => this.router.navigate(['/courses']));
  }

  saveNew(): Observable<unknown> {
    return this.coursesService.createCourse(this.form.value as Course)
  }

  saveExist(): Observable<unknown> {
    return this.coursesService.updateCourse(this.currentCourseId, this.form.value as Course);
  }

  cancel() {
    this.router.navigate(['/courses']);
  }
}
