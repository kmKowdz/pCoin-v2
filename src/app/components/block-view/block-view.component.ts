import { Component, OnInit, Input } from '@angular/core';
//from savjee's source code
//import blockchain service
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {

  //get the input and store it in a variable called block
  @Input() public block;

  //from savjee's source code
  //to store the info from the input
  @Input()
  public selectedBlock;

  private blocksInChain;

  constructor(private blockchainService: BlockchainService) {
    this.blocksInChain = blockchainService.blockchainInstance.chain;
  }

  ngOnInit() {
  }

  //from savjee's source code
  //method to get transaction's length
  blockHasTx() {
    return this.block.transactions.length > 0;
  }

  //method to return the block if selected
  isSelectedBlock() {
    return this.block === this.selectedBlock;
  }

  //method to get the block number
  getBlockNumber() {
    return this.blocksInChain.indexOf(this.block) + 1;
  }

}
