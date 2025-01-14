import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/page-header/page-header.component';
import { teamMembers } from './teamMembers';
@Component({
  selector: 'app-the-team',
  standalone: true,
  imports: [NgFor, PageHeaderComponent],
  templateUrl: './the-team.component.html',
  styleUrl: './the-team.component.scss',
})
export class TheTeamComponent {
  teamMembers = teamMembers;
}
