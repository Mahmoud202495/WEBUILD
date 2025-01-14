import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionServicesComponent } from './construction-services.component';

describe('ConstructionServicesComponent', () => {
  let component: ConstructionServicesComponent;
  let fixture: ComponentFixture<ConstructionServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructionServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
