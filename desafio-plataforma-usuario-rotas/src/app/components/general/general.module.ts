import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { AddressComponent } from './components/address/address.component';
import { BasicComponent } from './components/basic/basic.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    GeneralComponent,
    AddressComponent,
    BasicComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
