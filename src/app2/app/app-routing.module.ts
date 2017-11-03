import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'for-two-only',
    loadChildren: '../../shared/for-two-only/for-two-only.module#ForTwoOnlyModule',
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
