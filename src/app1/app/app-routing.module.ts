import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'for-one-only',
    loadChildren: '../../shared/for-one-only/for-one-only.module#ForOneOnlyModule',
  },
  {
    path: 'for-both-apps',
    loadChildren: '../../shared/for-both-apps/for-both-apps.module#ForBothAppsModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
