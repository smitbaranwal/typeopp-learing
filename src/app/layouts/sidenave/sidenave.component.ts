import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-sidenave',
  templateUrl: './sidenave.component.html',
  styleUrls: ['./sidenave.component.scss']
})
export class SidenaveComponent implements OnInit {
  @Input() navitems;
  constructor() { }

  ngOnInit() {
    console.log('Item length', this.navitems.length);
  }

  toggleSubNav(subNavList: number, state: boolean): boolean {
    if ( subNavList > 0) {
      return state ? false : true;
    } else {
      return false;
    }
  }
}
