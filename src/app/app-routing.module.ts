import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NFTComponent } from './hackathon-components/nft/nft.component';
import { SpotPriceComponent } from './hackathon-components/spot-price/spot-price.component';
import { TransactionComponent } from './hackathon-components/transaction/transaction.component';
import { AdminComponent } from './theme/layout/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path:'transactions',
        component:TransactionComponent
      },
      {
        path:'nft',
        component:NFTComponent
      },
      {
        path:'spotprice',
        component:SpotPriceComponent
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
