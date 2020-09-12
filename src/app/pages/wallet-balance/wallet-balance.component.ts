import { Component, OnInit } from '@angular/core';
//import activated route and blockchain service
import { ActivatedRoute } from '@angular/router';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.scss']
})

export class WalletBalanceComponent implements OnInit {

  //declare variables for the needed info in from the wallet
  public walletAddress = '';
  public balance = 0;
  public transactions = [];

  constructor(private route: ActivatedRoute, private blockchainService: BlockchainService) {}

  //instantiate variables once the script is called
  ngOnInit() {
    this.route.params.subscribe( (params) => {
        this.walletAddress = params['address'];

        const blockchain = this.blockchainService.blockchainInstance;
        this.balance = blockchain.getBalanceOfAddress(this.walletAddress);
        this.transactions = blockchain.getAllTransactionsForWallet(this.walletAddress);
    });
  }

}
