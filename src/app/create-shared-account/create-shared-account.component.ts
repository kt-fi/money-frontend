import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedAccountService } from '../shared-account.service';

@Component({
  selector: 'app-create-shared-account',
  templateUrl: './create-shared-account.component.html',
  styleUrls: ['./create-shared-account.component.scss']
})
export class CreateSharedAccountComponent implements OnInit {

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
      this.sharedAccountService.createNewSharedAccount(accountName, creatorId).subscribe(data => {
        console.log(data)
      })
  }

}
