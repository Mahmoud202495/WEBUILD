import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { AboutUsComponent } from '../../shared/about-us/about-us.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageHeaderComponent, AboutUsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
