import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarMainComponent } from './components/calendar-main/calendar-main.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarMainComponent
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
export class CalendarRoutingModule {
  static components = [
    CalendarMainComponent
  ]
}
