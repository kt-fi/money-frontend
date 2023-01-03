import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedAccountService } from 'src/app/shared-account.service';
import { Transaction } from 'src/app/transaction';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-create-new-transaction',
  templateUrl: './create-new-transaction.component.html',
  styleUrls: ['./create-new-transaction.component.scss']
})
export class CreateNewTransactionComponent implements OnInit {

  userId: string = '27dac04f5d5';
  accountId:string ='ac04f5d5a1a';

  totalSpent: number = 0;
  balance: any = 0;

  transactions?: Transaction[];

  constructor(private transactionsService: TransactionsService, private sharedAccountService: SharedAccountService) { }

  form?: FormGroup | any;
  ngOnInit(): void {
    this.form = new FormGroup({
      quantity: new FormControl(''),
      paymentType: new FormControl('Debit'),
      concept: new FormControl('')
    })

    this.sharedAccountService.getUserBalance(this.userId, this.accountId)
    this.sharedAccountService.userBalance.subscribe((data:Transaction[] | any)=>{
      this.balance = data;
    })

    this.sharedAccountService.getUserTransactions(this.userId, this.accountId);
    this.sharedAccountService.userTransactions.subscribe((data:Transaction[] | any)=>{
      this.transactions = data;
      
    })  
  }

  onSubmitTransaction(form:FormGroup){
    let transaction = {
      accountId: this.accountId,
      userId: this.userId,
      quantity: form.value.quantity,
      paymentType: form.value.paymentType,
      concept: form.value.paymentType
    }

    this.transactionsService.createNewTransaction(transaction).subscribe(data => {
      console.log(data)
    })

    setTimeout(()=>{
      this.sharedAccountService.getUserBalance(this.userId, this.accountId)
    },1500)
    
  }

  getUserBalance(){
    this.sharedAccountService.getUserBalance(this.userId, this.accountId)
  }

}
