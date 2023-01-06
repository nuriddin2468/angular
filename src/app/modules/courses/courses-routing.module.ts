import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from '@shared/components/wrapper/wrapper.component';
import { CoursesComponent } from '@modules/courses/components/courses/courses.component';
import { CourseAddEditComponent } from '@modules/courses/components/course-add-edit/course-add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    data: {
      breadcrumb: 'Courses'
    },
    children: [
      {
        path: '',
        component: CoursesComponent,
        data: {
          breadcrumb: null
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
