import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FantasyhomeComponent } from './fantasy/fantasyhome/fantasyhome.component';

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent
    component: FantasyhomeComponent
  },
  {

    path: 'home',
    // component: HomeComponent
    component: FantasyhomeComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
