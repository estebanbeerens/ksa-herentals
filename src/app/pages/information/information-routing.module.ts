import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationMainComponent } from './components/information-main/information-main.component';

const routes: Routes = [
  {
    path: '',
    component: InformationMainComponent
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
export class InformationRoutingModule {
  static components = [
    InformationMainComponent
  ];
}
