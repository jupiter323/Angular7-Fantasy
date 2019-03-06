import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftRoutingModule } from './draft-routing.module';
import { DraftComponent } from './draft/draft.component';
import { DrafthomeComponent } from './drafthome/drafthome.component';

@NgModule({
  declarations: [DraftComponent, DrafthomeComponent],
  imports: [
  CommonModule,
    DraftRoutingModule
  ]
})
export class DraftModule { }
