import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {

  //declare a pendingtransactions variable
  public pendingTransactions = [];

  //inject blockchainservices
  constructor(private blockchainService: BlockchainService) {
    this.pendingTransactions = blockchainService.getPendingTransactions();
   }

  ngOnInit() {
  }

  //add a method to mine the pending transactions
  minePendingTransactions(){
    this.blockchainService.minePendingTransactions();
  }

}
