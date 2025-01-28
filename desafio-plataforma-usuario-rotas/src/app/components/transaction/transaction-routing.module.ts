import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { CreditComponent } from './components/credit/credit.component';
import { DebitComponent } from './components/debit/debit.component';

const routes: Routes = [
  {
    path: '',
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
