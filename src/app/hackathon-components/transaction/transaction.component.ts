import { Component, OnInit } from '@angular/core';
import { TokenBalanceService } from 'src/app/theme/shared/services/token-balance.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(private tokenservice:TokenBalanceService) { }

  async ngOnInit(): Promise<void> {
    const data = await this.tokenservice.getInfo(false);
    debugger
  }

}
