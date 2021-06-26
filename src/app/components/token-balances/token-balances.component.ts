import { Component, OnInit } from '@angular/core';
import { TokenBalanceService } from 'src/app/core/services/token-balance.service';

@Component({
  selector: 'app-token-balances',
  templateUrl: './token-balances.component.html',
  styleUrls: ['./token-balances.component.scss']
})
export class TokenBalancesComponent implements OnInit {

  constructor(private tokenBalanceService: TokenBalanceService) { }

  async ngOnInit(): Promise<void> {
    await this.tokenBalanceService.getInfo(false);
  }



}
