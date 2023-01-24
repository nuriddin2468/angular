import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from '@modules/courses/components/courses/courses.component';
import { CourseAddEditComponent } from '@modules/courses/components/course-add-edit/course-add-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CoursesComponent,
    data: {
      breadcrumb: 'Dashboard'
    }
  },
  {
    path: 'add',
    component: CourseAddEditComponent,
    data: {
      breadcrumb: 'New Course'
    }
  },
  {
    path: ':id',
    component: CourseAddEditComponent,
    data: {
      breadcrumb: 'Update Course'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
