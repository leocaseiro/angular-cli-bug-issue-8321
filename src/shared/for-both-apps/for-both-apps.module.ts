import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForBothAppsComponent } from './for-both-apps.component';

export const ForBothAppsRoutes: Routes = [
  {
    path: '',
    component: ForBothAppsComponent
  }
];

@NgModule({
  declarations: [
    ForBothAppsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ForBothAppsRoutes)
  ],
  providers: []
})
export class ForBothAppsModule { }
