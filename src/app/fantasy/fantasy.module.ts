import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PrizesComponent } from './prizes/prizes.component';
import { ScoutComponent } from './scout/scout.component';
import { HelpComponent } from './help/help.component';
import { FantasyRoutingModule } from './fantasy-routing.module';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FantasyhomeComponent } from './fantasyhome/fantasyhome.component';
import { FantasyheaderComponent } from './fantasyheader/fantasyheader.component';

@NgModule({
  declarations: [PrizesComponent, ScoutComponent, HelpComponent, FantasyComponent, FantasyhomeComponent, FantasyheaderComponent],
  imports: [
    CommonModule,
    FantasyRoutingModule
  ]
})
export class FantasyModule { }
