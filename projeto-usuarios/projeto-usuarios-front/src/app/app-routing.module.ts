import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserInfosComponent } from './components/user-infos/user-infos.component';

export const routes: Routes = [
  {
      path: '',
      component: LoginComponent,
  },
  {
      path: 'user-infos',
      component: UserInfosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
