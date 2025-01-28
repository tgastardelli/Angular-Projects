import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { GeneralComponent } from './components/general/general.component';
import { BasicComponent } from './components/general/components/basic/basic.component';
import { ContactComponent } from './components/general/components/contact/contact.component';
import { AddressComponent } from './components/general/components/address/address.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'general',
    component: GeneralComponent,
    children: [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
