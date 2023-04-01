import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentielleComponent } from './residentielle.component';

describe('ResidentielleComponent', () => {
  let component: ResidentielleComponent;
  let fixture: ComponentFixture<ResidentielleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentielleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentielleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
