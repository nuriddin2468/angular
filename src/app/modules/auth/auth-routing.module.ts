import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from '@shared/components/wrapper/wrapper.component';
import { LoginComponent } from '@modules/auth/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: WrapperComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
