import { Component } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { MenuContentComponent } from '../menu-content/menu-content.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MainMenuComponent, MenuContentComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
