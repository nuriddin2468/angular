import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WrapperComponent } from '@shared/components/wrapper/wrapper.component';
import { HeaderComponent } from '@shared/components/wrapper/header/header.component';
import { FooterComponent } from '@shared/components/wrapper/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CoursePlateStatusDirective } from './directives/course-plate-status/course-plate-status.directive';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { DialogComponent } from './components/dialog/dialog.component';
import { IsAuthenticatedDirective } from './directives/is-authenticated.directive';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FieldHeaderComponent } from './components/field-header/field-header.component';


const components = [
  HeaderComponent,
  FooterComponent,
  WrapperComponent,
  BreadcrumbsComponent,
  DialogComponent,
  ErrorPageComponent,
  FieldHeaderComponent
]

const pipes = [
  DurationPipe,
  OrderByPipe,
  FilterPipe
]

const directives = [
  CoursePlateStatusDirective,
  IsAuthenticatedDirective
]

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...directives

  ],
  exports: [
    ...components,
    ...pipes,
    ...directives
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class SharedModule { }
