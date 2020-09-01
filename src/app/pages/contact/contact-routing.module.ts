import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactMainComponent } from './components/contact-main/contact-main.component';

const routes: Routes = [
  {
    path: '',
    component: ContactMainComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
  static components = [
    ContactMainComponent
  ];
}
