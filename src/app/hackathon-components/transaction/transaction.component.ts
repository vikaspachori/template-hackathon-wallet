import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/theme/shared/services/loader.service';
import { TransactionService } from 'src/app/theme/shared/services/transactions/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  constructor(public transactionService: TransactionService, private loaderService: LoaderService) { }

  async ngOnInit() {
    this.loaderService.showLoader();
    await this.transactionService.getTransactionList();

    this.loaderService.hideLoader();
   
  }

}
