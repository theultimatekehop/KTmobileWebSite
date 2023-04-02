import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialSliderComponent } from './commercial-slider.component';

describe('CommercialSliderComponent', () => {
  let component: CommercialSliderComponent;
  let fixture: ComponentFixture<CommercialSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
