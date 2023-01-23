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

  userName: string = 'Fake Name'

  form: any;

  constructor(private sharedAccountService: SharedAccountService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      accountName: new FormControl('',  [Validators.required, Validators.minLength(5)])
    })
  }

  createAccount(form: FormGroup){
     let accountName = form.value.accountName;
     let creatorId = '27dac04f5d5';
      this.subscription1$ = this.sharedAccountService.createNewSharedAccount(accountName, creatorId).subscribe((data:SharedAccount) => {
        console.log(data)
      })
  }

  ngOnDestroy(){
    this.subscription1$?.unsubscribe();
  }

}
