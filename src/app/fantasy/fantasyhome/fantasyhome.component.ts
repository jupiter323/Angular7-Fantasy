import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../global.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fantasyhome',
  templateUrl: './fantasyhome.component.html',
  styleUrls: ['./fantasyhome.component.scss']
})
export class FantasyhomeComponent implements OnInit {

  constructor(private gs: GlobalService, private router: Router) { }

  ngOnInit() {
    if (this.gs.auth)
      this.router.navigate(["/fantasy/status"]);
  }

}
