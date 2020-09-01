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
    path: 'kalender',
    loadChildren: () =>
      import('./pages/calendar/calendar.module').then(
        (m) => m.CalendarModule
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
