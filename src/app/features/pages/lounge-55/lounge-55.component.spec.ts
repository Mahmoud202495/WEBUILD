import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lounge55Component } from './lounge-55.component';

describe('Lounge55Component', () => {
  let component: Lounge55Component;
  let fixture: ComponentFixture<Lounge55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lounge55Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lounge55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
