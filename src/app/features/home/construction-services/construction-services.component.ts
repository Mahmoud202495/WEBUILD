import { Component } from '@angular/core';
import { ServiceItemComponent } from '../../../shared/service-item/service-item.component';

@Component({
  selector: 'app-construction-services',
  standalone: true,
  imports: [ServiceItemComponent],
  templateUrl: './construction-services.component.html',
  styleUrl: './construction-services.component.scss'
})
export class ConstructionServicesComponent {

}
