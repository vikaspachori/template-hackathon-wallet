import { Component, OnInit } from '@angular/core';
import { tokenInfo } from 'src/app/theme/shared/models/tokenbalance.model';
import { tokenPriceInfo } from 'src/app/theme/shared/models/tokenPrice.model';
import { LoaderService } from 'src/app/theme/shared/services/loader.service';
import { SpotPriceService } from 'src/app/theme/shared/services/spotprice/spot-price.service';
import { TokenBalanceService } from 'src/app/theme/shared/services/token-balance.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  tokenInfo: tokenInfo[] = null;
  spottokens: tokenPriceInfo[] = null;
  
  constructor(private tokenservice:TokenBalanceService, private priceService: SpotPriceService, private loaderService: LoaderService) { }

  async ngOnInit(): Promise<void> {

    this.loaderService.showLoader();
    const data = await this.tokenservice.getInfo(false);
    let priceInfo = await this.priceService.getSpotPrices();

    if(data.data.items.length > 0)
    {
      this.tokenInfo = data.data.items;
    }

    if(priceInfo != null && priceInfo.data.items.length > 0)
    {
     this.spottokens = priceInfo.data.items;
    }

    this.loaderService.hideLoader();
  }

  public getWalletBalance(balance: string, contract_decimal: number): string {

   let result = Number.parseFloat(balance) / (Math.pow(10, contract_decimal));
   return result.toFixed(2);
  }

  public getUSDBalance(balance: string, ticker: string, contract_decimal: number): string{

    let tokenDetails = this.spottokens.find(s=> s.contract_ticker_symbol == ticker);
    if(tokenDetails != null)
    {
      let result = Number.parseFloat(balance) / (Math.pow(10, contract_decimal));
      result = result * tokenDetails?.quote_rate;
      return " ~ $"+ result.toFixed(3); 
    }
   
    
    return "";
  }

}
