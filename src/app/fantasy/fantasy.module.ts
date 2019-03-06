import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PrizesComponent } from './prizes/prizes.component';
import { ScoutComponent } from './scout/scout.component';
import { HelpComponent } from './help/help.component';
import { FantasyRoutingModule } from './fantasy-routing.module';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FantasyhomeComponent } from './fantasyhome/fantasyhome.component';
import { FantasyheaderComponent } from './fantasyheader/fantasyheader.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { GlobalService } from './../global.service';
import { StatusComponent } from './status/status.component';
import { MyteamComponent } from './myteam/myteam.component';
import { PointsComponent } from './points/points.component';
import { TransfersComponent } from './transfers/transfers.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { FixturesComponent } from './fixtures/fixtures.component';

@NgModule({
  declarations: [PrizesComponent, ScoutComponent, HelpComponent, FantasyComponent, FantasyhomeComponent, FantasyheaderComponent, StatisticsComponent, StatusComponent, MyteamComponent, PointsComponent, TransfersComponent, LeaguesComponent, FixturesComponent],
  imports: [
  CommonModule,
    FantasyRoutingModule
  ],
  providers:[GlobalService]
})
export class FantasyModule { }
