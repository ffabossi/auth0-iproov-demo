import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IproovAuthComponent } from './components/iproov-auth/iproov-auth.component';

const routes: Routes = [
  {
    path: 'iproov-authentication',
    component: IproovAuthComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
