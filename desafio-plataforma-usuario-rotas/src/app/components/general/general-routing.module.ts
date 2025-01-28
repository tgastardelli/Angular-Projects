import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general.component';
import { BasicComponent } from './components/basic/basic.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddressComponent } from './components/address/address.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full'
      },
      {
        path: 'basic',
        component: BasicComponent
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'address',
        component: AddressComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
