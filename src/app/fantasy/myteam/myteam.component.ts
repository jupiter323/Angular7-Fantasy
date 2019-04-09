import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.scss']
})
export class MyteamComponent implements OnInit {
  isListView: boolean = false
  constructor(private gs:GlobalService) { }

  ngOnInit() {
    this.gs.setLoding();
    setTimeout(() => {
      this.gs.finishLoading();
    }, 1000);
  }

  setListView() {
    this.isListView = true;
  }
  unsetListView() {
    this.isListView = false;
  }

}
