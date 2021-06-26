import { Component, OnInit } from '@angular/core';
import { tokenPriceInfo } from 'src/app/theme/shared/models/tokenPrice.model';
import { SpotPriceService } from 'src/app/theme/shared/services/spotprice/spot-price.service';

@Component({
  selector: 'app-spot-price',
  templateUrl: './spot-price.component.html',
  styleUrls: ['./spot-price.component.scss']
})
export class SpotPriceComponent implements OnInit {

  tokens: tokenPriceInfo[] = null;
  constructor(private priceInfo: SpotPriceService) { }

  async ngOnInit(): Promise<void> {

   let data = await this.priceInfo.getSpotPrices();
   if(data != null && data.data.items.length > 0)
   {
    this.tokens = data.data.items;
    this.tokens = this.tokens.sort(a=> a.rank).slice(0, 25);
    console.log(this.tokens);
   }
   
  }

}
