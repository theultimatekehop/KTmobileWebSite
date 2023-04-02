import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialSliderComponent } from './residential-slider.component';

describe('ResidentialSliderComponent', () => {
  let component: ResidentialSliderComponent;
  let fixture: ComponentFixture<ResidentialSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
