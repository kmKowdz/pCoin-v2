import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {

  //declare a variable where the input will be stored
  @Input() public transactions = [];

  constructor() { }

  ngOnInit() {
  }

}