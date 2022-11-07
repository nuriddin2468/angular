import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/wrapper/header/header.component';
import { FooterComponent } from './components/wrapper/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { RouterOutlet } from '@angular/router';


const components = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    ...components,
    WrapperComponent
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
