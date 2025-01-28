import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { GeneralComponent } from './components/general/general.component';
import { BasicComponent } from './components/general/components/basic/basic.component';
import { ContactComponent } from './components/general/components/contact/contact.component';
import { AddressComponent } from './components/general/components/address/address.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CreditComponent } from './components/transaction/components/credit/credit.component';
import { DebitComponent } from './components/transaction/components/debit/debit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'general',
    loadChildren: () => import('./components/general/general.module').then(m => m.GeneralModule),
  },
  {
    path: 'transactions',
    component: TransactionComponent,
    children: [
      {
        path: '',
        redirectTo: 'credit',
        pathMatch: 'full'
      },
      {
        path: 'credit',
        component: CreditComponent
      },
      {
        path: 'debit',
        component: DebitComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
