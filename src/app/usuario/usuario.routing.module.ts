import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './usuario.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UsuarioComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class UsuarioRoutingModule { }
