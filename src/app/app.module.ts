import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    MaxMinMeterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
