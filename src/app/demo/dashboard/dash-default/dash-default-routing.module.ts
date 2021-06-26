import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotPriceComponent } from './components/spot-price/spot-price.component';
import { DashDefaultComponent } from './dash-default.component';

const routes: Routes = [
  {
    path: '',
    component: DashDefaultComponent
  },
  {
    path: 'spot',
    component: SpotPriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashDefaultRoutingModule { }
