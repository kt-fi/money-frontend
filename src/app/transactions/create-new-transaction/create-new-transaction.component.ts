import { Component, Input, OnInit } from '@angular/core';
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

  loader?: any;

  userId: string = '';
  accountId:string ='';

  accountUsers: User[] = []

  transactions?: Transaction[];

  constructor(private transactionsService: TransactionsService, private sharedAccountService: SharedAccountService, private currentRoute: ActivatedRoute) { }


  ngOnInit(): void {

    
    this.userId = this.currentRoute.snapshot.params['userId']
    this.accountId = this.currentRoute.snapshot.params['accountId']

    this.sharedAccountService.getUserTransactions(this.userId, this.accountId);
    this.sharedAccountService.userTransactions.subscribe((data:Transaction[] | any)=>{
      this.transactions = data;
    })  

    this.sharedAccountService.getAccountUsers(this.accountId).subscribe((users:any) => {
      this.accountUsers = users.members
      console.log(users.members)
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
