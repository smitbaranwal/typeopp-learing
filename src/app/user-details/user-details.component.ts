import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PageChangedEvent } from 'ngx-bootstrap/pagination'

@Component({
  selector: 'tl-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId: String = '';
  contentArray = new Array(90).fill({});
  returnedArray: string[];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(result => {
      this.userId = result.userId;
      this.findUserDetails();
    });
   }

  ngOnInit() {
    this.contentArray = [
      {trainingName: 'Computer Architecture', status: 'passed'},
      {trainingName: 'Computer Architecture', status: 'passed'},
      {trainingName: 'Computer Architecture', status: 'waiting'},
      {trainingName: 'Computer Architecture', status: 'passed'},
      {trainingName: 'Computer Architecture', status: 'in progress'},
      {trainingName: 'Computer Architecture', status: 'passed'},
      {trainingName: 'Computer Architecture', status: 'passed'}
    ];
    this.returnedArray = this.contentArray.slice(0, 10);
  }

  findUserDetails () {
    console.log('userId: ', this.userId);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

  getDot( status: String ): String {
    switch (status) {
      case 'waiting':
      return 'red-dot';
      case 'passed':
      return 'green-dot';
      case 'in progress':
      return 'yellow-dot';

    }
  }


}
