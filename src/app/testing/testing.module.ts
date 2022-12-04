import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockBreadcrumbsComponent } from '@app/testing/components/mock-breadcrumbs.component';
import { MockCoursesComponent } from '@app/testing/components/mock-courses.component';
import { MockCourseCardComponent } from '@app/testing/components/mock-course-card.component';
import { MockFooterComponent } from '@app/testing/components/mock-footer.component';
import { MockHeaderComponent } from '@app/testing/components/mock-header.component';
import { MockSearchComponent } from '@app/testing/components/mock-search.component';
import { MockDurationPipe } from './pipes/mock-duration.pipe';
import { MockFilterPipe } from './pipes/mock-filter.pipe';
import { MockOrderByPipe } from './pipes/mock-order-by.pipe';


const components = [
  MockBreadcrumbsComponent,
  MockCoursesComponent,
  MockCourseCardComponent,
  MockFooterComponent,
  MockHeaderComponent,
  MockSearchComponent
];

const pipes = [
  MockDurationPipe,
  MockFilterPipe,
  MockOrderByPipe
]

@NgModule({
  declarations: [
    ...components,
    ...pipes
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components,
    ...pipes
  ]
})
export class TestingModule { }
