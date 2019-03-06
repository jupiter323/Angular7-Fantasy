import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftComponent } from './draft/draft.component';
import { DrafthomeComponent } from './drafthome/drafthome.component';


const routes: Routes = [
    {
        path: 'draft',
        component: DraftComponent,
        children: [
            {
                path: "",
                component: DrafthomeComponent
            },
            {
                path: 'drafthome',
                component: DrafthomeComponent
            }           
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DraftRoutingModule { }