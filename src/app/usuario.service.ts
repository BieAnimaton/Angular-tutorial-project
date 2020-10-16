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

  public listaUsuario(): Usuario[] {
    return [
      {
        nome: "Gabriel",
        email: "gcbragion@gmail.com"
      },
      {
        nome: "Pedro",
        email: "pepgameplays.003@gmail.com"
      },
      {
        nome: "Luca",
        email: "narigudo,luca@gmail.com"
      },
      {
        nome: "Ninja",
        email: "amorpelaAlice.ninja@gmail.com"
      },
    ]
  }
}
