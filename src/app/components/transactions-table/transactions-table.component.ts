import { Component, OnInit, Input } from '@angular/core';
//import blockchain service
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {

  //declare a variable where the input will be stored
  @Input() 
  public transactions = [];

  //initialize blockchainservice
  constructor(public blockchainService: BlockchainService) { }

  ngOnInit() {
  }

}