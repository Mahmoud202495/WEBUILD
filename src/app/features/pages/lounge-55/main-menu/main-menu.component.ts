import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  categories: string[] = [
    'dessert',
    'light meals',
    'hot coffee',
    'cold coffee',
    'non coffee cold drink',
    'non coffee hot drink',
    'water',
    'Nabataty',
  ];
  activeIndex: number = 0;
  isSearchOpen: boolean = false;
  searchQuery: string = '';

  selectCategory(index: number): void {
    this.activeIndex = index;
  }
}
