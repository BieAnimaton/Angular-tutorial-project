import { Injectable } from '@angular/core';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {
    let usuario = new Usuario()

    usuario.nome = "Gabriel"
    usuario.email = "gcbragion@gmail.com"

    return usuario
  }
}
