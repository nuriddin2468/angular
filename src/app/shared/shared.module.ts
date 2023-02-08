import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
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
import { LoadingBlockComponent } from './components/loading-block/loading-block.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { DateControlComponent } from './components/form-controls/date-control/date-control.component';
import { DurationControlComponent } from './components/form-controls/duration-control/duration-control.component';
import { AutocompleteControlComponent } from './components/form-controls/autocomplete-control/autocomplete-control.component';
import { FormsModule } from '@angular/forms';
import { ShowErrorComponent } from './components/show-error/show-error.component';
import { TranslateModule } from '@ngx-translate/core';


const components = [
  HeaderComponent,
  FooterComponent,
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
    ...directives,
    LoadingBlockComponent,
    DateControlComponent,
    DurationControlComponent,
    AutocompleteControlComponent,
    ShowErrorComponent

  ],
    exports: [
        ...components,
        ...pipes,
        ...directives,
        LoadingBlockComponent,
        DurationControlComponent,
        DateControlComponent,
        AutocompleteControlComponent,
        ShowErrorComponent
    ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatProgressSpinnerModule,
    MatButtonModule,
    FormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
