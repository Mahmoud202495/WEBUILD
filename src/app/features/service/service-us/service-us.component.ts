import { Component } from '@angular/core';
import { ServiceItemComponent } from '../../../shared/service-item/service-item.component';

@Component({
  selector: 'app-service-us',
  standalone: true,
  imports: [ServiceItemComponent],
  templateUrl: './service-us.component.html',
  styleUrl: './service-us.component.scss',
})
export class ServiceUsComponent {}
