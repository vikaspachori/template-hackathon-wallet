import { Component, OnInit } from '@angular/core';
import { SupportChartData1 } from './chart/support-chart-data-1';
import { SupportChartData2 } from './chart/support-chart-data-2';
import { SeoChart1 } from './chart/seo-chart-1';
import { SeoChart2 } from './chart/seo-chart-2';
import { SeoChart3 } from './chart/seo-chart-3';
import { PowerCardChart1 } from './chart/power-card-chart-1';
import { PowerCardChart2 } from './chart/power-card-chart-2';
import { ChartDB } from 'src/app/fack-db/chart-data';
import { TokenBalanceService } from 'src/app/theme/shared/services/token-balance.service';
import { LoaderService } from 'src/app/theme/shared/services/loader.service';
import { tokenInfo } from 'src/app/theme/shared/models/tokenbalance.model';

@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss']
})
export class DashDefaultComponent implements OnInit {
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public chartDB: any;
  public powerCardChartData2: any;
  tokenInfo: tokenInfo[] = null;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private tokenservice: TokenBalanceService, private loaderService: LoaderService) {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.chartDB = ChartDB;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
  }

  async ngOnInit() {
    this.loaderService.showLoader();
    const data = await this.tokenservice.getInfo(false);
    if(data.data.items.length > 0)
    {
      this.tokenInfo =[...data.data.items];
    }
    this.loaderService.hideLoader();
  }

}
