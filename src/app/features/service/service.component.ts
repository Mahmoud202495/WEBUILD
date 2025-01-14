import { Component } from '@angular/core';
import { ServiceUsComponent } from './service-us/service-us.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [PageHeaderComponent, ServiceUsComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {}
