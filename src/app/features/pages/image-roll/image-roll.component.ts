import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-image-roll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-roll.component.html',
  styleUrl: './image-roll.component.scss',
})
export class ImageRollComponent implements OnInit {
  @Input() imgSrc!: string;
  @Input() captionText: string = '';
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this.imgSrc = 'http://localhost:4200' + this.imgSrc;
    // this.setCssVariable('--imageUrl', `url(${this.imgSrc})`);
  }

  // setCssVariable(variable: string, value: string): void {
  //   this.el.nativeElement.style.setProperty('--imageUrl', `url(${this.imgSrc})`);

  //   this.renderer.setStyle(this.el.nativeElement, variable, value);
  // }
}
