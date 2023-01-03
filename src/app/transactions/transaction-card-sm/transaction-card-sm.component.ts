import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/transaction';

@Component({
  selector: 'app-transaction-card-sm',
  templateUrl: './transaction-card-sm.component.html',
  styleUrls: ['./transaction-card-sm.component.scss']
})
export class TransactionCardSmComponent implements OnInit {

  @Input()
  transaction?: Transaction;

  constructor() { }

  ngOnInit(): void {
   
  }

}
