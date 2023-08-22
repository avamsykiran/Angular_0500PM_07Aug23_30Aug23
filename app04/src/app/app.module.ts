import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumberSeriesComponent } from './number-series/number-series.component';
import { NumberSeriesGroupComponent } from './number-series-group/number-series-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberSeriesComponent,
    NumberSeriesGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
