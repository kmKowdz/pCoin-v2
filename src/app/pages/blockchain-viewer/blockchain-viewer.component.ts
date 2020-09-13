import { Component, OnInit } from '@angular/core';
//import blockchain service
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent implements OnInit {
  
  //create a variable to store the blocks
  public blocks = [];
  //add an attribute for the selected block
  public selectedBlock = null;


  //read all blocks in the array
  constructor(private blockchainService: BlockchainService) { 
    this.blocks = blockchainService.blockchainInstance.chain;
    this.selectedBlock = this.blocks[0];
  }

  ngOnInit() {
  }

  showTransactions(block) {
    this.selectedBlock = block;
    return false;
  }

  blockHasTx(block) {
    return block.transactions.length > 0;
  }

  selectedBlockHasTx() {
    return this.blockHasTx(this.selectedBlock);
  }

  isSelectedBlock(block) {
    return this.selectedBlock === block;
  }

  getBlockNumber(block) {
    return this.blocks.indexOf(block) + 1;
  }

}