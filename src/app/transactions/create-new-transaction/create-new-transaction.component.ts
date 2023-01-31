import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/menu.service';
import { ModalService } from 'src/app/modal.service';
import { SharedAccountService } from 'src/app/shared-account.service';
import { Transaction } from 'src/app/transaction';
import { User } from 'src/app/user';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-create-new-transaction',
  templateUrl: './create-new-transaction.component.html',
  styleUrls: ['./create-new-transaction.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '*',
      })),
      state('closed', style({
        height: '0rem',

      })),
      transition('open => closed', [
        animate('0.1s ease-in')
      ]),
      transition('closed => open', [
        animate('0.1s ease-out')
      ]),
    ]),
    trigger('openCloseText', [
      // ...
      state('open', style({
        zIndex: '100000',
      })),
      state('closed', style({
        zIndex: '-5',

      })),
      transition('open => closed', [
        animate('0s')
      ]),
      transition('closed => open', [
        animate('0s 0.4s')
      ]),
    ]),
  ]
})
export class CreateNewTransactionComponent implements OnInit {

  userMenuOpen: boolean = false;

  //Subscriptions
  subscription1$?: Subscription;
  subscription2$?: Subscription;

  loader?: any;


  userId: string = '';
  accountId:string ='';

  accountUsers: User[] = []

  transactions?: Transaction[];

  constructor(private toggleMenu: MenuService, private transactionsService: TransactionsService, private sharedAccountService: SharedAccountService, private currentRoute: ActivatedRoute, private modalService: ModalService, private elementRef: ElementRef) { }


  ngOnInit(): void {

    
    this.userId = this.currentRoute.snapshot.params['userId']
    this.accountId = this.currentRoute.snapshot.params['accountId']

    this.sharedAccountService.getUserTransactions(this.userId, this.accountId);
    this.subscription1$ = this.sharedAccountService.userTransactions.subscribe((data:Transaction[] | any)=>{
      this.transactions = data;
    })  

    this.subscription2$ = this.sharedAccountService.getAccountUsers(this.accountId).subscribe((users:User[]) => {
      this.accountUsers = users;
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
  this.toggleUserMenu()
}


// TO BE REFACTORED INTO COMPONENTS

addTransaction(userId:string, accountId:string){
  let event = this.modalService.toggleModal('OpenModal', { event: 'form', 'isOpen': true, data: {'userId': userId, 'accountId': accountId}})
  this.elementRef.nativeElement.dispatchEvent(event)
}


toggleUserMenu(){
  this.userMenuOpen = !this.userMenuOpen;
}

ngOnDestroy() {
  this.subscription1$?.unsubscribe();
  this.subscription2$?.unsubscribe();
}

}
