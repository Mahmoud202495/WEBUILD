import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAQuoteComponent } from './get-a-quote.component';

describe('GetAQuoteComponent', () => {
  let component: GetAQuoteComponent;
  let fixture: ComponentFixture<GetAQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
