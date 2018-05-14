import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tl-subscription-type',
  templateUrl: './subscription-type.component.html',
  styleUrls: ['./subscription-type.component.scss']
})
export class SubscriptionTypeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

}
