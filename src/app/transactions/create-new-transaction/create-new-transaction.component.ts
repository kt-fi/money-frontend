import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedAccountService } from 'src/app/shared-account.service';
import { Transaction } from 'src/app/transaction';
import { User } from 'src/app/user';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-create-new-transaction',
  templateUrl: './create-new-transaction.component.html',
  styleUrls: ['./create-new-transaction.component.scss']
})
export class CreateNewTransactionComponent implements OnInit {

  @Input()
  event:any;

  userId: string = '';
  accountId:string ='';

  accountUsers: User[] = []

  totalSpent: number = 0;
  balance: number = 0;
  totalAccountBalance: number = 0;

  transactions?: Transaction[];

  constructor(private transactionsService: TransactionsService, private sharedAccountService: SharedAccountService, private currentRoute: ActivatedRoute) { }

  form?: FormGroup | any;
  ngOnInit(): void {

    this.userId = this.currentRoute.snapshot.params['userId']
    this.accountId = this.currentRoute.snapshot.params['accountId']

    this.form = new FormGroup({
      quantity: new FormControl('', [Validators.required]),
      paymentType: new FormControl('Debit'),
      concept: new FormControl('', [Validators.required])
    })

    this.sharedAccountService.getUserBalance(this.userId, this.accountId)
    this.sharedAccountService.userBalance.subscribe((data:Transaction[] | any)=>{
      this.balance = data.userBalance;
      this.totalSpent = data.userTotalSpent;
      this.totalAccountBalance = data.totalAccountBalance;
    })

    this.sharedAccountService.getUserTransactions(this.userId, this.accountId);
    this.sharedAccountService.userTransactions.subscribe((data:Transaction[] | any)=>{
      this.transactions = data;
    })  

    this.sharedAccountService.getAccountUsers(this.accountId).subscribe((users:any) => {
      this.accountUsers = users.members
      console.log(users.members)
    })

  }

  onSubmitTransaction(form:FormGroup){
    let transaction = {
      accountId: this.accountId,
      userId: this.userId,
      quantity: form.value.quantity,
      paymentType: form.value.paymentType,
      concept: form.value.concept
    }

    this.transactionsService.createNewTransaction(transaction).subscribe(transaction => {
      console.log(form)
   
      this.getUserBalance(transaction)

    })

   
    
  }

  getUserBalance(transaction: any){    
    setTimeout(()=>{
    this.sharedAccountService.getUserBalance(transaction.userId, transaction.accountId);
    this.sharedAccountService.getUserTransactions(transaction.userId, transaction.accountId);
    },1500)
  }

onChangeAccount(userId: any){
  this.sharedAccountService.getUserTransactions(userId, this.accountId)
}

}
