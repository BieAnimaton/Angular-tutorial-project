import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UsuarioComponent
  },
  {
    path: 'add',
    component: UsuarioCadastroComponent
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
