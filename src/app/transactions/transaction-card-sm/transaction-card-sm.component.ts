import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedAccountService } from 'src/app/shared-account.service';
import { Transaction } from 'src/app/transaction';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction-card-sm',
  templateUrl: './transaction-card-sm.component.html',
  styleUrls: ['./transaction-card-sm.component.scss']
})
export class TransactionCardSmComponent implements OnInit {

  @Input()transaction?: Transaction;
  @Input()userId?:string;

  @Output()event = new EventEmitter();


  constructor(private transactionService: TransactionsService, private sharedAccountService: SharedAccountService) { }

  ngOnInit(): void {
   
  }

  onDeleteTransaction(transaction: Transaction){

    this.transactionService.onDeleteTransaction(transaction.transactionId, transaction.userId, transaction.accountId);
    this.event.emit(transaction);
  }

}
