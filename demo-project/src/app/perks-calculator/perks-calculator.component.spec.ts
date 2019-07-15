import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerksCalculatorComponent } from './perks-calculator.component';

describe('PerksCalculatorComponent', () => {
  let component: PerksCalculatorComponent;
  let fixture: ComponentFixture<PerksCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerksCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerksCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
