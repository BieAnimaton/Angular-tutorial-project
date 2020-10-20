import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
      this.items = [
        {
          label: 'Home', 
          icon: 'pi pi-fw pi-home',
          routerLink: 'home',
        },
        {
            label: 'Usuario',
            icon: 'pi pi-fw pi-user',
            routerLink: 'usuario',
        },
        {
          label: 'Adicionar',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/usuario/add',
      },
      {
        label: 'Estados',
        icon: 'pi pi-fw pi-id-card',
        routerLink: 'estados',
    }
    ];
  }
}
