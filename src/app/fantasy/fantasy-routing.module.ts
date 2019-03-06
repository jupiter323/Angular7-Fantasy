import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrizesComponent } from './prizes/prizes.component';
import { ScoutComponent } from './scout/scout.component';
import { HelpComponent } from './help/help.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FantasyhomeComponent } from './fantasyhome/fantasyhome.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatusComponent } from './status/status.component';
import { MyteamComponent } from './myteam/myteam.component';
import { PointsComponent } from './points/points.component';
import { TransfersComponent } from './transfers/transfers.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'fantasy',
        component: FantasyComponent,
        children: [
            {
                path: "",
                component: FantasyhomeComponent
            },
            {
                path: "register",
                component: RegisterComponent
            },
            {
                path: 'fantasyhome',
                component: FantasyhomeComponent
            },
            {
                path: 'prizes',
                component: PrizesComponent
            },
            {
                path: 'scout',
                component: ScoutComponent
            },
            {
                path: 'help',
                component: HelpComponent
            },
            {
                path: 'statistics',
                component: StatisticsComponent
            },
            {
                path: "status",
                component: StatusComponent
            },
            {
                path: "myteam",
                component: MyteamComponent
            },
            {
                path: "points",
                component: PointsComponent
            },
            {
                path: "transfers",
                component: TransfersComponent
            },
            {
                path: "leagues",
                component: LeaguesComponent
            },
            {
                path: "fixtures",
                component: FixturesComponent
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FantasyRoutingModule { }