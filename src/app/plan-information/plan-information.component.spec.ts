import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanInformationComponent } from './plan-information.component';

describe('PlanInformationComponent', () => {
  let component: PlanInformationComponent;
  let fixture: ComponentFixture<PlanInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
