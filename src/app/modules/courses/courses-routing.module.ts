import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from '@shared/components/wrapper/wrapper.component';
import { CoursesComponent } from '@modules/courses/components/courses/courses.component';
import { CourseAddComponent } from '@modules/courses/components/course-add/course-add.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: WrapperComponent,
    children: [
      {
        path: '',
        component: CoursesComponent
      },
      {
        path: 'add',
        component: CourseAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
