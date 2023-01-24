import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SharedAccount } from '../shared-account';
import { SharedAccountService } from '../shared-account.service';

@Component({
  selector: 'app-create-shared-account',
  templateUrl: './create-shared-account.component.html',
  styleUrls: ['./create-shared-account.component.scss']
})
export class CreateSharedAccountComponent implements OnInit {

  subscription1$?: Subscription;

  userName?:any;
  userId?:any;

  accountName?: string;

  form: any;

  addUser:string = "Type Email";

  addUsersList: string[] = [];

  constructor(private sharedAccountService: SharedAccountService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("moneyAccountUserName")
    this.form = new FormGroup({
      accountName: new FormControl('',  [Validators.required, Validators.minLength(5)])
    }) 
    
    this.userId = localStorage.getItem("moneyAccountUserId");
  }

  createAccount(form: FormGroup){
     let accountName = form.value.accountName;
    
      this.subscription1$ = this.sharedAccountService.createNewSharedAccount(accountName, this.userId).subscribe((data:SharedAccount) => {
        this.accountName = data.accountName
      })
  }

  addUserToAccount(email: string){
    this.addUsersList.push(email)
  }

  sendInvites(){

  }

  ngOnDestroy(){
    this.subscription1$?.unsubscribe();
  }

}
