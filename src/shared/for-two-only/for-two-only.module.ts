import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForTwoOnlyComponent } from './for-two-only.component';

export const ForTwoOnlyRoutes: Routes = [
  {
    path: '',
    component: ForTwoOnlyComponent
  }
];

@NgModule({
  declarations: [
    ForTwoOnlyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ForTwoOnlyRoutes)
  ],
  providers: []
})
export class ForTwoOnlyModule { }
