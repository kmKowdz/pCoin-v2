import { Component, OnInit } from '@angular/core';
//import blockchain service
import { BlockchainService } from './services/blockchain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  //declare variables
  public blockchain;
  public showInfoMessage = true;

  //instantiate blockchain service
  constructor(private blockchainService: BlockchainService) {
    this.blockchain = blockchainService.blockchainInstance;
  }

  ngOnInit() {
  }

  //method to display notification about the pending transactions
  thereArePendingTransactions() {
    return this.blockchain.pendingTransactions.length > 0;
  }

  //add a method to dismiss the info message
  dismissInfoMessage() {
    this.showInfoMessage = false;
  }
}
