import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/modal.service';
import { SharedAccountService } from 'src/app/shared-account.service';
import { Transaction } from 'src/app/transaction';
import { User } from 'src/app/user';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        top: '50vh'
      })),
      state('closed', style({
        top: '150vh'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openCloseBg', [
      // ...
      state('open', style({
        display: 'visible'
      })),
      state('closed', style({
        display: 'none'
      })),
      transition('open => closed', [
        animate('0s 0.5s')
      ]),
      transition('closed => open', [
        animate('0s 0s')
      ]),
    ]),
  ]
})
export class NewTransactionComponent implements OnInit {

  //SUBSCRIPTION

  subscription1$?: Subscription;

  @Input()
  isOpen?: boolean = false;;
  
  loading:boolean = false;

  //HIDE TIPO PAGO
  hideInput: boolean = true;

  userId?: string;
  accountId?:string;

  constructor(private transactionsService: TransactionsService, private sharedAccountService: SharedAccountService, private currentRoute: ActivatedRoute, private elementRef: ElementRef, private modalService: ModalService) { }

  form?: FormGroup | any;

  @Input()
  data?:any;
  
  ngOnInit(): void {

    // this.userId = this.currentRoute.snapshot.params['userId']
    // this.accountId = this.currentRoute.snapshot.params['accountId']

    this.userId = this.currentRoute.snapshot.params['userId']
    this.accountId = this.currentRoute.snapshot.params['accountId']

    this.form = new FormGroup({
      quantity: new FormControl('', [Validators.required]),
      paymentType: new FormControl('Debit'),
      concept: new FormControl('', [Validators.required])
    })

  }

  onSubmitTransaction(form:FormGroup){
    this.loading = true;

    let transaction = {
      accountId: this.data.accountId,
      userId: this.data.userId,
      quantity: form.value.quantity,
      paymentType: form.value.paymentType,
      concept: form.value.concept
    }

    this.subscription1$ = this.transactionsService.createNewTransaction(transaction).subscribe((transaction: Transaction) => {      
      this.getUserBalance(transaction)
      form.reset();
     this.closeModal();
    })
  }

  getUserBalance(transaction: Transaction){    
    setTimeout(()=>{
    this.sharedAccountService.getUserBalance(transaction.userId, transaction.accountId);
    this.sharedAccountService.getUserTransactions(transaction.userId, transaction.accountId);
    this.loading = false;
    },1500)
  }

  
  closeModal(){
    let event = this.modalService.toggleModal('OpenModal', {event: 'form', 'isOpen': false, data: null})
    this.elementRef.nativeElement.dispatchEvent(event)
  }


  ngOnDestroy() {
    this.subscription1$?.unsubscribe();
  }

}
