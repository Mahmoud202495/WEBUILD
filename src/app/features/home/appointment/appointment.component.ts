import { Component } from '@angular/core';
import { FormComponent } from '../../../shared/form/form.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {

}
