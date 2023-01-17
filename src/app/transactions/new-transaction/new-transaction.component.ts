import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedAccountService } from 'src/app/shared-account.service';
import { Transaction } from 'src/app/transaction';
import { User } from 'src/app/user';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent implements OnInit {

  //HIDE TIPO PAGO
  hideInput: boolean = true;

  userId: string = '';
  accountId:string ='';

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
      form.reset();
    })
  }

  getUserBalance(transaction: any){    
    setTimeout(()=>{
    this.sharedAccountService.getUserBalance(transaction.userId, transaction.accountId);
    this.sharedAccountService.getUserTransactions(transaction.userId, transaction.accountId);
    },1500)
  }


}
