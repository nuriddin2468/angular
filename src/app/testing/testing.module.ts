import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockBreadcrumbsComponent } from '@app/testing/components/mock-breadcrumbs.component';
import { MockCoursesComponent } from '@app/testing/components/mock-courses.component';
import { MockCourseCardComponent } from '@app/testing/components/mock-course-card.component';
import { MockFooterComponent } from '@app/testing/components/mock-footer.component';
import { MockHeaderComponent } from '@app/testing/components/mock-header.component';
import { MockSearchComponent } from '@app/testing/components/mock-search.component';


const components = [
  MockBreadcrumbsComponent,
  MockCoursesComponent,
  MockCourseCardComponent,
  MockFooterComponent,
  MockHeaderComponent,
  MockSearchComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class TestingModule { }
