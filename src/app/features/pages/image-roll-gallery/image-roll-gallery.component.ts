import { Component } from '@angular/core';
import { ImageRollComponent } from '../image-roll/image-roll.component';

@Component({
  selector: 'app-image-roll-gallery',
  standalone: true,
  imports: [ImageRollComponent],
  templateUrl: './image-roll-gallery.component.html',
  styleUrl: './image-roll-gallery.component.scss',
})
export class ImageRollGalleryComponent {}
