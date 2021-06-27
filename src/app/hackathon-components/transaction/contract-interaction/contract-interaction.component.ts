import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/theme/shared/services/transactions/transaction.service';

@Component({
  selector: 'app-contract-interaction',
  templateUrl: './contract-interaction.component.html',
  styleUrls: ['./contract-interaction.component.scss']
})
export class ContractInteractionComponent implements OnInit {

  constructor(public transactionService: TransactionService) { }

  ngOnInit(): void {
  }

}
