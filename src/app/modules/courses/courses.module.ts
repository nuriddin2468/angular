import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from '@modules/courses/components/courses/courses.component';
import { SharedModule } from '@shared/shared.module';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe } from '@shared/pipes/filter/filter.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { CourseAddComponent } from './components/course-add/course-add.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    SearchComponent,
    CourseAddComponent
  ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        SharedModule,
        FormsModule,
        FontAwesomeModule,
        MatDialogModule,
        ReactiveFormsModule
    ],
  providers: [
    FilterPipe
  ]
})
export class CoursesModule { }
