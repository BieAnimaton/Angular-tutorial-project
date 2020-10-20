import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(h => h.HomeModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then(u => u.UsuarioModule)
  },
  {
    path: 'estados',
    loadChildren: () => import('./estados/estados.module').then(e => e.EstadosModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
