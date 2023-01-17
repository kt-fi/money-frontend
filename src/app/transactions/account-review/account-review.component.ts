import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedAccountService } from 'src/app/shared-account.service';
import { Transaction } from 'src/app/transaction';
import { User } from 'src/app/user';

@Component({
  selector: 'app-account-review',
  templateUrl: './account-review.component.html',
  styleUrls: ['./account-review.component.scss']
})
export class AccountReviewComponent implements OnInit {

  @Input()
  event:any;

  //HIDE TIPO PAGO
  hideInput: boolean = true;

  userId: string = '';
  accountId:string ='';

  totalSpent: number = 0;
  balance: number = 0;
  totalAccountBalance: number = 0;

  loader: boolean = false;

  constructor( private sharedAccountService: SharedAccountService, private currentRoute: ActivatedRoute) { }

  
  ngOnInit(): void {

    
    this.userId = this.currentRoute.snapshot.params['userId']
    this.accountId = this.currentRoute.snapshot.params['accountId']

    this.sharedAccountService.getUserBalance(this.userId, this.accountId)
    this.sharedAccountService.userBalance.subscribe((data:Transaction[] | any)=>{
      this.balance = data.userBalance;
      this.totalSpent = data.userTotalSpent;
      this.totalAccountBalance = data.totalAccountBalance;
    })
  }
}

