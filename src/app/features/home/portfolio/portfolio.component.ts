import { Component } from '@angular/core';
import { PortfolioCardComponent } from '../../../shared/portfolio-card/portfolio-card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioCardComponent, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      imageSrc: '/img/portfolio-1.jpg',
      projectName: 'Project 1',
      location: '123 Street, New York, USA',
      category: 'Construction',
      link: '#',
    },
    {
      imageSrc: '/img/portfolio-2.jpg',
      projectName: 'Project 2',
      location: '456 Street, New York, USA',
      category: 'Renovation',
      link: '#',
    },
    {
      imageSrc: '/img/portfolio-3.jpg',
      projectName: 'Project 3',
      location: '789 Street, New York, USA',
      category: 'Construction',
      link: '#',
    },
    {
      imageSrc: '/img/portfolio-4.jpg',
      projectName: 'Project 4',
      location: '101 Street, New York, USA',
      category: 'Renovation',
      link: '#',
    },
    {
      imageSrc: '/img/portfolio-5.jpg',
      projectName: 'Project 5',
      location: '102 Street, New York, USA',
      category: 'Construction',
      link: '#',
    },
    {
      imageSrc: '/img/portfolio-6.jpg',
      projectName: 'Project 6',
      location: '103 Street, New York, USA',
      category: 'Renovation',
      link: '#',
    },
  ];

  filteredProjects = this.projects;

  filterProjects(category: string): void {
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.category === category
      );
    }
  }
}
