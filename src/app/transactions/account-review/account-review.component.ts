import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedAccountService } from 'src/app/shared-account.service';
import { Transaction } from 'src/app/transaction';
import { User } from 'src/app/user';

@Component({
  selector: 'app-account-review',
  templateUrl: './account-review.component.html',
  styleUrls: ['./account-review.component.scss']
})
export class AccountReviewComponent implements OnInit {

  subscription1$?: Subscription;


  loading: boolean = false;
  error?:string;

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

    this.loading = true;
    this.userId = this.currentRoute.snapshot.params['userId']
    this.accountId = this.currentRoute.snapshot.params['accountId']

    this.sharedAccountService.getUserBalance(this.userId, this.accountId)
    this.subscription1$ = this.sharedAccountService.userBalance.subscribe((data:Transaction[] | any)=>{
      this.balance = data.userBalance;
      this.totalSpent = data.userTotalSpent;
      this.totalAccountBalance = data.totalAccountBalance;
      this.loading = false;
    },(err)=>{
      this.error = "An error Has Occured getting data"
    },()=>{
      console.log('done')
    })
  }

ngOnDestroy() {
  this.subscription1$?.unsubscribe();
}

}

