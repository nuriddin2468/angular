import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CoursesService } from '@modules/courses/services/courses.service';
import { filter, Observable, switchMap } from 'rxjs';
import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent {

  @Input() course: Course;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  starIcon = faStar;

  constructor(
    private coursesService: CoursesService,
    private dialogService: Dialog
  ) {
  }

  deleteCourse(id: number) {
    this.coursesService.getCourse(id)
      .pipe(
        switchMap(course => this.showDialog(course.name)),
        untilDestroyed(this)
      ).subscribe(() => this.delete.emit(id));
  }

  private showDialog(name: string): Observable<unknown> {
    return this.dialogService.open<boolean>(DialogComponent, {
      width: '300px',
      data: {
        title: 'Warning!',
        question: `Would you like to delete course: </br><b>${name}</b>`
      }
    }).closed.pipe(
      filter(data => !!data)
    )
  }
}
