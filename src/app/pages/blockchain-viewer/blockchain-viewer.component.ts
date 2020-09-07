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
    this.blocks = blockchainService.getBlocks();
    this.selectedBlock = this.blocks[0]; // initialize the attribute
  }

  ngOnInit() {
  }

}