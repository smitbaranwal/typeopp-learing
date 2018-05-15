import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionBudgetComponent } from './subscription-budget.component';

describe('SubscriptionBudgetComponent', () => {
  let component: SubscriptionBudgetComponent;
  let fixture: ComponentFixture<SubscriptionBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
