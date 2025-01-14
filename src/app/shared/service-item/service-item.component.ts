import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss',
})
export class ServiceItemComponent {
  @Input() imageSrc: string = '';
  @Input() iconClass: string = '';
  @Input() address: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  animationClass: string = '';

  ngOnInit() {
    setTimeout(() => {
      this.animationClass = 'animate-bottom';
    }, 200);
  }
}
