import { Component, OnInit } from '@angular/core';
//import blockchain service
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  //declare a variable
  public blockchain;
  //instantiate blockchain
  constructor(private blockchainService: BlockchainService) { 
    this.blockchain = blockchainService.blockchainInstance;
  }

  ngOnInit() {
  }

}
