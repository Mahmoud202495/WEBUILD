import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRollGalleryComponent } from './image-roll-gallery.component';

describe('ImageRollGalleryComponent', () => {
  let component: ImageRollGalleryComponent;
  let fixture: ComponentFixture<ImageRollGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageRollGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageRollGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
