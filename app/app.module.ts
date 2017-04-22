import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TourListComponent } from "./tour-list.component";
import { TourComponent } from "./tour.component";
import { NewTourComponent } from './new-tour.component';

import { AgmCoreModule } from 'angular2-google-maps/core/core-module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvIMjQhVcIKEFtBT6TDPh7gr1pv2ufMpE'
    })
  ],
  declarations: [ AppComponent, TourListComponent, TourComponent , NewTourComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
