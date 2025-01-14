import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageHeaderComponent, ContactUsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
