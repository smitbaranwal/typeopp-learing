import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination'

@Component({
  selector: 'tl-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  contentArray = new Array(90).fill({});
  returnedArray: string[];

  constructor() { }

  ngOnInit() {
    this.contentArray = [
      {
        invoiceNo: 16736,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,593',
        dueDate: '19 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 19346,
        invoiceDate: '13 Nov,18',
        invoiceAmount: '$1,593',
        dueDate: '12 Dec,18',
        status: 'paid'
      },
      {
        invoiceNo: 38299,
        invoiceDate: '10 Dec,18',
        invoiceAmount: '$1,991',
        dueDate: '12 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 27394,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$593',
        dueDate: '31 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 38748,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,593',
        dueDate: '19 Dec,18',
        status: 'draft'
      },
      {
        invoiceNo: 16736,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,593',
        dueDate: '19 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 19346,
        invoiceDate: '13 Nov,18',
        invoiceAmount: '$1,593',
        dueDate: '12 Dec,18',
        status: 'paid'
      },
      {
        invoiceNo: 38299,
        invoiceDate: '10 Dec,18',
        invoiceAmount: '$1,991',
        dueDate: '12 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 27394,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$593',
        dueDate: '31 Dec,18',
        status: 'draft'
      },
      {
        invoiceNo: 38748,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,593',
        dueDate: '19 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 16736,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,593',
        dueDate: '19 Dec,18',
        status: 'draft'
      },
      {
        invoiceNo: 19346,
        invoiceDate: '13 Nov,18',
        invoiceAmount: '$1,593',
        dueDate: '12 Dec,18',
        status: 'paid'
      },
      {
        invoiceNo: 38299,
        invoiceDate: '10 Dec,18',
        invoiceAmount: '$1,991',
        dueDate: '12 Dec,18',
        status: 'draft'
      },
      {
        invoiceNo: 27394,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$593',
        dueDate: '31 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 38748,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,593',
        dueDate: '19 Dec,18',
        status: 'draft'
      },
      {
        invoiceNo: 16736,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,593',
        dueDate: '19 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 19346,
        invoiceDate: '13 Nov,18',
        invoiceAmount: '$1,593',
        dueDate: '12 Dec,18',
        status: 'paid'
      },
      {
        invoiceNo: 38299,
        invoiceDate: '10 Dec,18',
        invoiceAmount: '$1,991',
        dueDate: '12 Dec,18',
        status: 'draft'
      },
      {
        invoiceNo: 27394,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$593',
        dueDate: '31 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 38748,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,5991',
        dueDate: '19 Dec,18',
        status: 'draft'
      },
      {
        invoiceNo: 16736,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,593',
        dueDate: '19 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 19346,
        invoiceDate: '13 Nov,18',
        invoiceAmount: '$1,554',
        dueDate: '12 Dec,18',
        status: 'paid'
      },
      {
        invoiceNo: 38299,
        invoiceDate: '10 Dec,18',
        invoiceAmount: '$1,236',
        dueDate: '12 Dec,18',
        status: 'draft'
      },
      {
        invoiceNo: 27394,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$593',
        dueDate: '31 Dec,18',
        status: 'draft'
      },
      {
        invoiceNo: 38748,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,992',
        dueDate: '19 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 16736,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,523',
        dueDate: '19 Dec,18',
        status: 'paid'
      },
      {
        invoiceNo: 19346,
        invoiceDate: '13 Nov,18',
        invoiceAmount: '$1,280',
        dueDate: '12 Dec,18',
        status: 'paid'
      },
      {
        invoiceNo: 38299,
        invoiceDate: '10 Dec,18',
        invoiceAmount: '$1,991',
        dueDate: '12 Dec,18',
        status: 'draft'
      },
      {
        invoiceNo: 27394,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$593',
        dueDate: '31 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 38748,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,593',
        dueDate: '19 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 16736,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,593',
        dueDate: '19 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 19346,
        invoiceDate: '13 Nov,18',
        invoiceAmount: '$1,593',
        dueDate: '12 Dec,18',
        status: 'paid'
      },
      {
        invoiceNo: 38299,
        invoiceDate: '10 Dec,18',
        invoiceAmount: '$1,991',
        dueDate: '12 Dec,18',
        status: 'draft'
      },
      {
        invoiceNo: 27394,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$593',
        dueDate: '31 Dec,18',
        status: 'sent'
      },
      {
        invoiceNo: 38748,
        invoiceDate: '16 Dec,18',
        invoiceAmount: '$1,593',
        dueDate: '19 Dec,18',
        status: 'sent'
      }
    ];
    this.returnedArray = this.contentArray.slice(0, 10);
  }


  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

}
