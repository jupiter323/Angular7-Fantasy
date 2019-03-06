import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataUiArgs = [
    { "contentId": 1058249, "mediaId": 6004535186001, "mediaTitle": "Match preview: Arsenal v Southampton", "mediaDescription": "Southampton are aiming for their first-ever PL double over Arsenal, while the Gunners are unbeaten against Saints at home", "mediaDate": "21/2/2019", "mediaHotlinkUrl": "", "mediaHotlinkText": "" },
    { "contentId": 1058086, "mediaId": 6004463242001, "mediaTitle": "FPL Daily Update: GW27 #6", "mediaDescription": "Looking for a forward who plays in the blank Gameweeks 31 and 33, Danny Jamieson picks out Burnley&#39s Ashley Barnes", "mediaDate": "21/2/2019", "mediaHotlinkUrl": "", "mediaHotlinkText": "" },
    { "contentId": 1057722, "mediaId": 6003898608001, "mediaTitle": "Match preview: Leicester v Crystal Palace", "mediaDescription": "Palace have won their last three PL matches against Leicester, while the Eagles&#39 manager Roy Hodgson is set to make PL history", "mediaDate": "21/2/2019", "mediaHotlinkUrl": "", "mediaHotlinkText": "" },
    { "contentId": 1058246, "mediaId": 6004534450001, "mediaTitle": "Match preview: Man Utd v Liverpool", "mediaDescription": "Manchester United aim to continue their impressive home record against the Merseysiders in the PL", "mediaDate": "21/2/2019", "mediaHotlinkUrl": "", "mediaHotlinkText": "" },
    { "contentId": 1058306, "mediaId": 6004577271001, "mediaTitle": "On this day - 21 Feb 2004: Charlton 3-2 Blackburn", "mediaDescription": "Blackburn goalkeeper Brad Friedel scored a shock equaliser, only for Charlton&#39s Claus Jensen to snatch a last-gasp win", "mediaDate": "21/2/2019", "mediaHotlinkUrl": "", "mediaHotlinkText": "" }
  ]
  dataUiArgs4 = { "contentId": 1058306, "mediaId": 6004577271001, "mediaTitle": "On this day - 21 Feb 2004: Charlton 3-2 Blackburn", "mediaDescription": "Blackburn goalkeeper Brad Friedel scored a shock equaliser, only for Charlton&#39s Claus Jensen to snatch a last-gasp win", "mediaDate": "21/2/2019", "mediaHotlinkUrl": "", "mediaHotlinkText": "" }

  constructor(private gs:GlobalService) {  }

  ngOnInit() {
  }

}
