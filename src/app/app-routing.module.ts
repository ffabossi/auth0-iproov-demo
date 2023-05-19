import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IproovAuthComponent } from './components/iproov-auth/iproov-auth.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StepsComponent } from './components/steps/steps.component';

const routes: Routes = [
  {
    path: 'iproov-authentication',
    component: IproovAuthComponent
  },
  {
    path: '',
    component: StepsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
