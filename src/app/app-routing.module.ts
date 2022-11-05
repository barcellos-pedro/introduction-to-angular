import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';

const ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    title: 'Fairhouse - Dashboard',
    path: 'dashboard',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
