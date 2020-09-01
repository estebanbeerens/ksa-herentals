import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'informatie',
    loadChildren: () =>
      import('./pages/information/information.module').then(
        (m) => m.InformationModule
      ),
  },
  {
    path: 'kalender',
    loadChildren: () =>
      import('./pages/calendar/calendar.module').then(
        (m) => m.CalendarModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadModulesStrategy
  }),
],
  exports: [RouterModule],
  providers: [PreloadModulesStrategy],
})
export class AppRoutingModule { }
