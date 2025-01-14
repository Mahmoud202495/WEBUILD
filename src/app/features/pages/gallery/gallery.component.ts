import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { columns, ImageRollList } from './gallery';
import { ImageRollComponent } from '../image-roll/image-roll.component';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf, ImageRollComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  columns: ImageRollList = columns;
  onDown = false;
  onTouch = false;
  prevX = 0;
  prevY = 0;
  currentX = 0;
  currentY = 0;
  currentXtmp = 0;
  currentYtmp = 0;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.prevX = event.clientX;
    this.prevY = event.clientY;
    this.onDown = true;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.onDown) return;

    const deltaX = Math.min(
      Math.max(event.clientX - this.prevX + this.currentX, -window.innerWidth),
      0
    );
    const deltaY = Math.min(
      Math.max(event.clientY - this.prevY + this.currentY, -window.innerHeight),
      0
    );

    this.currentXtmp = deltaX;
    this.currentYtmp = deltaY;

    const images = document.querySelector('.images') as HTMLElement;
    images.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }

  @HostListener('mouseup')
  onMouseUp(): void {
    this.currentX = this.currentXtmp;
    this.currentY = this.currentYtmp;
    this.onDown = false;
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.onTouch = true;
    this.prevX = event.touches[0].clientX;
    this.prevY = event.touches[0].clientY;
    this.onDown = true;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    if (!this.onDown) return;

    const deltaX = Math.min(
      Math.max(
        event.touches[0].clientX - this.prevX + this.currentX,
        -window.innerWidth
      ),
      0
    );
    const deltaY = Math.min(
      Math.max(
        event.touches[0].clientY - this.prevY + this.currentY,
        -window.innerHeight
      ),
      0
    );

    this.currentXtmp = deltaX;
    this.currentYtmp = deltaY;

    const images = document.querySelector('.images') as HTMLElement;
    images.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }

  @HostListener('touchend')
  onTouchEnd(): void {
    this.currentX = this.currentXtmp;
    this.currentY = this.currentYtmp;
    this.onDown = false;
  }
}
