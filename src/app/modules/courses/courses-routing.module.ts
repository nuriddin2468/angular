import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from '@shared/components/wrapper/wrapper.component';
import { CoursesComponent } from '@modules/courses/components/courses/courses.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: WrapperComponent,
    children: [
      {
        path: '',
        component: CoursesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
