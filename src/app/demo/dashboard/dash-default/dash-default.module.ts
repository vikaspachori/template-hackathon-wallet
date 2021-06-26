import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashDefaultRoutingModule } from './dash-default-routing.module';
import { DashDefaultComponent } from './dash-default.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { SpotPriceComponent } from './components/spot-price/spot-price.component';


@NgModule({
  declarations: [DashDefaultComponent, SpotPriceComponent],
  imports: [
    CommonModule,
    DashDefaultRoutingModule,
    SharedModule
  ]
})
export class DashDefaultModule { }
