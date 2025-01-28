import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { GeneralComponent } from './components/general/general.component';
import { BasicComponent } from './components/general/components/basic/basic.component';
import { ContactComponent } from './components/general/components/contact/contact.component';
import { AddressComponent } from './components/general/components/address/address.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CreditComponent } from './components/transaction/components/credit/credit.component';
import { DebitComponent } from './components/transaction/components/debit/debit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GeneralModule } from './components/general/general.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TransactionComponent,
    CreditComponent,
    DebitComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    GeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
