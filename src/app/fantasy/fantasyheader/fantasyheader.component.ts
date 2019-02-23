import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fantasyheader',
  templateUrl: './fantasyheader.component.html',
  styleUrls: ['./fantasyheader.component.scss']
})
export class FantasyheaderComponent implements OnInit {
  tabIndex;
  constructor() { }

  ngOnInit() {
    this.tabIndex = 0
  }

}
