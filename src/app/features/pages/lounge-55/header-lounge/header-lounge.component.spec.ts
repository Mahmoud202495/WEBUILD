import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLoungeComponent } from './header-lounge.component';

describe('HeaderLoungeComponent', () => {
  let component: HeaderLoungeComponent;
  let fixture: ComponentFixture<HeaderLoungeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLoungeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLoungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
