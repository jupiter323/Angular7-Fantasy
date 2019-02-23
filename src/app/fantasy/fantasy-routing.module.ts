import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrizesComponent } from './prizes/prizes.component';
import { ScoutComponent } from './scout/scout.component';
import { HelpComponent } from './help/help.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FantasyhomeComponent } from './fantasyhome/fantasyhome.component';

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
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FantasyRoutingModule { }