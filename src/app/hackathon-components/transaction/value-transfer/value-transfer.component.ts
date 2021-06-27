import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/theme/shared/services/transactions/transaction.service';

@Component({
  selector: 'app-value-transfer',
  templateUrl: './value-transfer.component.html',
  styleUrls: ['./value-transfer.component.scss']
})
export class ValueTransferComponent implements OnInit {

  constructor(public transactionService: TransactionService){ }

  ngOnInit(): void {
  }

}
