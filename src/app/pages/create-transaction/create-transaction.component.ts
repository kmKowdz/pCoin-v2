import { Component, OnInit } from '@angular/core';
//import blockchain service
import { BlockchainService } from 'src/app/services/blockchain.service';
//import transaction
import { Transaction } from 'pCoin/src/blockchain';


@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {
  
  //declare a variable that will hold the details of the new txn 
  public newTx;
  //declare a variable to store the keys
  public walletKey;

  //initialize walletkey
  constructor(private blockchainService: BlockchainService) {
    this.walletKey = blockchainService.walletKeys[0];
   }

  ngOnInit() {
    //reset the page once loaded
    this.newTx = new Transaction();
  }

  //method to create new transaction
  createTransaction(){
    this.newTx.fromAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);

    this.blockchainService.addTransaction(this.newTx);

    this.newTx = new Transaction();
  }


}
