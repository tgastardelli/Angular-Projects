import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
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
    loadChildren: () => import('./components/transaction/transaction.module').then(m => m.TransactionModule),
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
