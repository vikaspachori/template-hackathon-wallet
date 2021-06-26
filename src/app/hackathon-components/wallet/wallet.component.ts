import { Component, OnInit } from '@angular/core';
import { tokenInfo } from 'src/app/theme/shared/models/tokenbalance.model';
import { TokenBalanceService } from 'src/app/theme/shared/services/token-balance.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  tokenInfo: tokenInfo[] = null;
  constructor(private tokenservice:TokenBalanceService) { }

  async ngOnInit(): Promise<void> {
    const data = await this.tokenservice.getInfo(false);
    if(data.data.items.length > 0)
    {
      this.tokenInfo = data.data.items;
    }
  }

}
