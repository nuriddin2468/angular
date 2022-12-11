import { Component, OnInit } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { CoursesService } from '@modules/courses/services/courses.service';
import { Dialog } from '@angular/cdk/dialog';
import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$ = this.coursesService.getCourses();
  searchValue: string = '';

  constructor(
    private coursesService: CoursesService,
    private dialogService: Dialog
  ) { }

  ngOnInit(): void {
  }

  trackByIdentity(index: number, item: Course): number {
    return item.id;
  }

  search(text: string) {
    this.searchValue = text;
  }

  deleteCourse(courseId: number) {
    const course = this.coursesService.getCourse(courseId);
    this.dialogService.open<boolean>(DialogComponent, {
      width: '300px',
      data: {
        title: 'Warning!',
        question: `Would you like to delete course: </br><b>${course.title}</b>`
      }
    }).closed.pipe(filter(data => data))
      .subscribe(() => this.coursesService.removeCourse(courseId));
  }
}
