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
import { CourseAddEditComponent } from './components/course-add-edit/course-add-edit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { SharedCoursesModule } from '@modules/courses/+state/modules/shared-courses.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    SearchComponent,
    CourseAddEditComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    SharedCoursesModule,
    MatButtonModule,
    TranslateModule
  ],
  providers: [
    FilterPipe,
    MatDatepickerModule
  ]
})
export class CoursesModule {
}
