import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { transactionResponse } from '../../models/transactions.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions() : Promise<transactionResponse>
  {
    let getSpotPricesEndPoint = environment.apiUrl + "/v1/4002/address/"+ environment.walletAddress +"/transactions_v2/?key="+ environment.apiKey;
    return  this.http.get<transactionResponse>(getSpotPricesEndPoint).toPromise();
  }
}
