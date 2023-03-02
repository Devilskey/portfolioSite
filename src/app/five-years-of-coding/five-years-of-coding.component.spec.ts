import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveYearsOfCodingComponent } from './five-years-of-coding.component';

describe('FiveYearsOfCodingComponent', () => {
  let component: FiveYearsOfCodingComponent;
  let fixture: ComponentFixture<FiveYearsOfCodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveYearsOfCodingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveYearsOfCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
