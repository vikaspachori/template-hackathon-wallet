import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tokenBalances } from '../models/tokenBalances.models';

@Injectable({
  providedIn: 'root'
})
export class TokenBalanceService {

  constructor(private http: HttpClient) { }

  getInfo(withNft: boolean): Promise<any>{
    let tokenBalanceInfoEndPoint = environment.apiUrl + "/v1/4002/address/"+ environment.walletAddress +"/balances_v2/?key="+ environment.apiKey + "&nft="+ withNft;
    return  this.http.get<tokenBalances>(tokenBalanceInfoEndPoint).toPromise();
  }
}
