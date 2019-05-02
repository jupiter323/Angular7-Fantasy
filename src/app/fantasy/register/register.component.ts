import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  pageindex = 0
  constructor(
    private gs: GlobalService
  ) {
    gs.registering = true;
   }

  ngOnInit() {
    this.loadScripts();
  }
  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.gs.load('chartjs', 'fantasy-register-pulse').then(data => {
      // Script Loaded Successfully
      console.log(data);
    }).catch(error => console.log(error));
  }
  next() {
    if (this.pageindex++ > 3) this.pageindex = 3;
  }
  back() {
    if (this.pageindex-- < 0) this.pageindex = 0;
  }
  ngOnDestroy() {
    this.gs.registering = false;
  }
}
