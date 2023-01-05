import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '@modules/courses/services/courses.service';
import { Course } from '@modules/courses/types/course';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add-edit.component.html',
  styleUrls: ['./course-add-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddEditComponent implements OnInit {

  form = this.fb.group({
    title: [],
    description: [],
    duration: [],
    creationDate: [],
    authors: []
  });

  isNew = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.getId() !== undefined) {
      this.seedForm(Number(this.getId()));
    }
  }

  private getId(): string | undefined {
    const {id} = this.route.snapshot.params;
    return id;
  }

  private seedForm(id: number): void {
    this.coursesService.getCourse(id).subscribe(res => {
      this.form.setValue({
        title: res.title,
        description: res.description,
        duration: res.duration,
        creationDate: new Date(res.creationDate),
        authors: res.authors || ''
      });
      this.isNew = false;
      this.cdr.markForCheck();
    });
  }

  save(): void {
    this.isNew ? this.saveNew() : this.saveExist();
    this.router.navigate(['/courses']);
  }

  saveNew(): void {
    this.coursesService.createCourse(this.form.value as Course);
  }

  saveExist(): void {
    const course = this.form.value as Course;
    course.id = Number(this.getId());
    this.coursesService.updateCourse(course);
  }

  cancel() {
    this.router.navigate(['/courses']);
  }
}
