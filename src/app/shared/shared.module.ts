import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WrapperComponent } from '@shared/components/wrapper/wrapper.component';
import { HeaderComponent } from '@shared/components/wrapper/header/header.component';
import { FooterComponent } from '@shared/components/wrapper/footer/footer.component';


const components = [
  HeaderComponent,
  FooterComponent,
  WrapperComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
