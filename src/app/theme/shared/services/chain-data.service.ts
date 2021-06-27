import { Injectable } from '@angular/core';
import { ChainData } from '../models/chaindata.model';

@Injectable({
  providedIn: 'root'
})
export class ChainDataService {

  constructor() { }
  public getChainData(): ChainData {
    return {
      chainaddress: localStorage.getItem("chainaddress"),
      chaintype: localStorage.getItem("chaintype")
    };

  }

  public setChainData(chainaddress, chaintype) {
    localStorage.setItem("chainaddress", chainaddress);
    localStorage.setItem("chaintype", chaintype)
  }

}
