import { Component, OnInit } from '@angular/core';
//import transaction
import { Transaction } from 'pCoin/src/blockchain';
//import router
import { Router } from '@angular/router';
//import iwalletkey
import { BlockchainService, IWalletKey } from '../../services/blockchain.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {
  
  //declare a variable that will hold the details of the new txn 
  public newTx;
  //declare a variable to store the keys
  public ownWalletKey: IWalletKey;

  //initialize walletkey
  constructor(private blockchainService: BlockchainService, private router: Router) {
    this.newTx = new Transaction();
    this.ownWalletKey = blockchainService.walletKeys[0];
   }

  ngOnInit() {
    //reset the page once loaded
    this.newTx = new Transaction();
  }

  //method to create new transaction
  // createTransaction(){
  //   this.newTx.fromAddress = this.walletKey.publicKey;
  //   this.newTx.signTransaction(this.walletKey.keyObj);

  //   this.blockchainService.addTransaction(this.newTx);
  //   this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
  //   this.newTx = new Transaction();
  // }
  createTransaction() {
    const newTx = this.newTx;

    // Set the FROM address and sign the transaction
    newTx.fromAddress = this.ownWalletKey.publicKey;
    newTx.signTransaction(this.ownWalletKey.keyObj);

    try {
      this.blockchainService.addTransaction(this.newTx);
    } catch (e) {
      alert(e);
      return;
    }

    this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
    this.newTx = new Transaction();
  }


}
