import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumersListComponent } from './consumers-list/consumers-list.component';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { TxnsComponent } from './txns/txns.component';
import { TxnsFormComponent } from './txns-form/txns-form.component';
import { TxnDetailsComponent } from './txn-details/txn-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumersListComponent,
    ConsumerFormComponent,
    TxnsComponent,
    TxnsFormComponent,
    TxnDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
