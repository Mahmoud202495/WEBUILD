import { Component } from '@angular/core';
import { HeaderLoungeComponent } from './header-lounge/header-lounge.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-lounge-55',
  standalone: true,
  imports: [HeaderLoungeComponent, NgIf],
  templateUrl: './lounge-55.component.html',
  styleUrl: './lounge-55.component.scss',
})
export class Lounge55Component {
  isPopupVisible: boolean = false;
  isRateUsPopupVisible: boolean = false;

  openPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  callWaiter() {
    alert('Waiter has been called!');
    this.closePopup();
  }

  openRateUsPopup() {
    this.isRateUsPopupVisible = true;
  }

  closeRateUsPopup() {
    this.isRateUsPopupVisible = false;
  }

  submitFeedback() {
    console.log('Feedback submitted!');
    this.closeRateUsPopup();
  }
}
