import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { WrapperComponent } from '../../shared/components/wrapper/wrapper.component';

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
