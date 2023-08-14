import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumersListComponent } from './consumers-list/consumers-list.component';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumersListComponent,
    ConsumerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
