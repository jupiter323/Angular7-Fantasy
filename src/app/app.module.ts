import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FantasyModule } from './fantasy/fantasy.module';
import { FooterComponent } from './footer/footer.component';
import { DraftModule } from './draft/draft.module';
import { GlobalService } from './global.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent    
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FantasyModule,
    DraftModule
  ],
  providers: [
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
