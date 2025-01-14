import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutUsComponent } from '../../shared/about-us/about-us.component';
import { ConstructionServicesComponent } from './construction-services/construction-services.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialComponent } from '../../shared/testimonial/testimonial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutUsComponent,
    ConstructionServicesComponent,
    AppointmentComponent,
    PortfolioComponent,
    TestimonialComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
