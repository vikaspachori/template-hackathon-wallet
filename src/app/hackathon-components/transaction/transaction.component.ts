import { Component, OnInit } from '@angular/core';
import { tokenInfo } from 'src/app/theme/shared/models/tokenbalance.model';
import { TokenBalanceService } from 'src/app/theme/shared/services/token-balance.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  tokenInfo: tokenInfo[] = null;
  constructor(private tokenservice:TokenBalanceService) { }

  async ngOnInit(): Promise<void> {
    const data = await this.tokenservice.getInfo(false);
    if(data.data.items.length > 0)
    {
      this.tokenInfo = data.data.items;
      console.log(this.tokenInfo);
    }
  }

}
