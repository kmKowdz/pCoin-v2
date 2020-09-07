import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {

  //get the input and store it in a variable called block
  @Input() public block;

  constructor() { }

  ngOnInit() {
  }

}
