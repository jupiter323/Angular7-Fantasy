import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fantasyheader',
  templateUrl: './fantasyheader.component.html',
  styleUrls: ['./fantasyheader.component.scss']
})
export class FantasyheaderComponent implements OnInit {
  tabIndex;
  constructor(private gs: GlobalService, private router: Router) { }

  ngOnInit() {
    this.tabIndex = 0;
  }


}
