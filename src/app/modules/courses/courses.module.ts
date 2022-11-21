import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from '@modules/courses/components/courses/courses.component';
import { SharedModule } from '@shared/shared.module';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CoursesModule { }
