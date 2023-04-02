import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaSliderComponent } from './ia-slider.component';

describe('IaSliderComponent', () => {
  let component: IaSliderComponent;
  let fixture: ComponentFixture<IaSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
