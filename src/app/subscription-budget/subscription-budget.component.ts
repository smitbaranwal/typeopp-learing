import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-subscription-budget',
  templateUrl: './subscription-budget.component.html',
  styleUrls: ['./subscription-budget.component.scss']
})
export class SubscriptionBudgetComponent implements OnInit {

  creditCardChecked = true;

  constructor() { }

  ngOnInit() {
  }

  onCardChange () {
    this.creditCardChecked = (this.creditCardChecked) ? false : true;
  }
}
