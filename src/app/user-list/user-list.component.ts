import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination'

@Component({
  selector: 'tl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  contentArray = new Array(90).fill({});
  returnedArray: string[];

  ngOnInit(): void {
    // this.contentArray = this.contentArray.map((v: string, i: number) => `Content line ${i + 1}`);
    this.contentArray = [
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 4, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 5, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 6, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 7, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 8, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 9, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 10, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 11, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 12, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 13, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 14, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 15, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 16, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 17, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 18, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 19, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 20, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 21, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 22, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 23, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 24, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 25, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 26, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 27, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 28, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 29, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 30, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 31, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 32, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 33, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 34, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 35, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 36, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 37, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 38, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 39, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'passed'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 1, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'},
      {userId: 2, userName: 'Maria Anders', noOfTrainings: 3, status: 'waiting'},
      {userId: 3, userName: 'Maria Anders', noOfTrainings: 3, status: 'in progress'}
    ];
    this.returnedArray = this.contentArray.slice(0, 10);
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
