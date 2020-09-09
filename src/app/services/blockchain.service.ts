import { Injectable } from '@angular/core';
//import blockchain module
import { Blockchain } from 'pCoin/src/blockchain';
//import elliptic library to generate key pair
import EC from "elliptic";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  //generate an instance of a blockchain
  public blockchainInstance = new Blockchain();
  //create a variable to store the walletkeys
  public walletKeys = []; //array for multiple key pairs

  //instantiate the difficulty level, mine pending transactions and generate wallet keys as this service is run
  constructor() { 
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('my-wallet-address');
  
    this.generateWalletKeys();
  }

  //add a method to retrieve blocks
  getBlocks(){
    return this.blockchainInstance.chain;
  }

  //method to add transaction
  addTransaction(tx){
    this.blockchainInstance.addTransaction(tx);
  }

  //add method to retrieve pending transactions
  getPendingTransactions(){
    return this.blockchainInstance.pendingTransactions;
  }

  //add method to mine pending transactions
  minePendingTransactions(){
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    )
  }

  //add a method to generate wallet keys
  private generateWalletKeys(){
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });
  }
}