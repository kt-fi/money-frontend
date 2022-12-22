import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-shared-account',
  templateUrl: './create-shared-account.component.html',
  styleUrls: ['./create-shared-account.component.scss']
})
export class CreateSharedAccountComponent implements OnInit {

  userName: string = 'Fake Name'

  form: any;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      accountName: new FormControl('',  [Validators.required, Validators.minLength(5)])
    })
  }

  createAccount(form: FormGroup){
    console.log(form.value)
  }

}
