import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tokenBalances } from '../models/tokenbalance.model';
import { ChainDataService } from './chain-data.service';

@Injectable({
  providedIn: 'root'
})
export class TokenBalanceService {

  
  constructor(private http: HttpClient, private chainDataService:ChainDataService) { }

  getInfo(withNft: boolean): Promise<any>{
    let chainInfo = this.chainDataService.getChainData();
    let tokenBalanceInfoEndPoint = environment.apiUrl + "/v1/"+ chainInfo.chaintype +"/address/"+ chainInfo.chainaddress +"/balances_v2/?key="+ environment.apiKey + "&nft="+ withNft;
    return  this.http.get<tokenBalances>(tokenBalanceInfoEndPoint).toPromise();
  }
}