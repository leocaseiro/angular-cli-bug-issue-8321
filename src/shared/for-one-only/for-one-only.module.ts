import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForOneOnlyComponent } from './for-one-only.component';

export const ForOneOnlyRoutes: Routes = [
  {
    path: '',
    component: ForOneOnlyComponent
  }
];

@NgModule({
  declarations: [
    ForOneOnlyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ForOneOnlyRoutes)
  ],
  providers: []
})
export class ForOneOnlyModule { }
