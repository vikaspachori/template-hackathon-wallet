import { Component, OnInit } from '@angular/core';
import { transactions } from 'src/app/theme/shared/models/transactions.model';
import { TransactionService } from 'src/app/theme/shared/services/transactions/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactionList :  transactions[] = null;
  constructor(private transactionService: TransactionService) { }

  async ngOnInit() {
    let transactions = await this.transactionService.getTransactions();
    if(transactions != null && transactions.data.items.length > 0)
    {
      this.transactionList = transactions.data.items;
      console.log(this.transactionList);
    }
   
  }

}
