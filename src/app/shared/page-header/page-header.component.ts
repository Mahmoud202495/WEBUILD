import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  @Input() title: string = 'Default Page Title';
  @Input() breadcrumb: { label: string; url: string; active?: boolean }[] = [];

}
