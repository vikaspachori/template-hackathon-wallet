import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/theme/shared/services/transactions/transaction.service';

@Component({
  selector: 'app-contract-deployment',
  templateUrl: './contract-deployment.component.html',
  styleUrls: ['./contract-deployment.component.scss']
})
export class ContractDeploymentComponent implements OnInit {

  constructor(public transactionService: TransactionService){ }

  ngOnInit(): void {
  }

}
