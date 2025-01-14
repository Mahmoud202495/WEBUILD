import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUsComponent } from './service-us.component';

describe('ServiceUsComponent', () => {
  let component: ServiceUsComponent;
  let fixture: ComponentFixture<ServiceUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
