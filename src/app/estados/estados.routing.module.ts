import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EstadosComponent } from './estados.component';

const appRoutes: Routes = [
  {
    path: '',
    component: EstadosComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class EstadosRoutingModule { }
