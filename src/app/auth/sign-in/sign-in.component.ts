import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  subscription1$?: Subscription;
  subscription2$?: Subscription;

  loading:boolean = false;

  signup: boolean = false;

  form?: any;
  error: boolean = false;
  errorMsg?: any;

  submitted: boolean = false;

  user?: User;
  accountId?: string;

  loggedIn?:boolean = false;

  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit(): void {

    let userId;
    if(localStorage.getItem("moneyAccountUserId")){
      userId = localStorage.getItem("moneyAccountUserId")
      this.loggedIn = true;
    }

    if(this.loggedIn){
      this.route.navigate([`home`])
    }

    this.form = new FormGroup({
      userName: new FormControl('User',[ Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[ Validators.required, Validators.email]),
      password: new FormControl('12345', [ Validators.required, Validators.minLength(5)]),
      repeatPassword: new FormControl('')
    })
  }

  setLocalStorage(userData: any){
    localStorage.setItem("moneyAccountUserName", userData.userName);
    localStorage.setItem("moneyAccountUserId", userData.userId)
  }

  submitForm(form: FormGroup){
    this.error = false;
    let userName = form.value.userName;
    let userEmail =  form.value.email;
    let password = form.value.password;
    let user;
    this.submitted= true;

    if(this.signup){
      this.loading = true;
      if(password != form.value.repeatPassword){
        this.error = true;
        this.errorMsg = "Passwords Do Not Match";
        return;
      }else{
        user = new User( undefined, userName, userEmail, password, [] );
        this.subscription1$ = this.authService.signUp(user).subscribe((data:User)=>{
       this.checkSigninResult(data)
  },
        (err: HttpErrorResponse)=>{
          this.error = true;
          this.errorMsg = err.message;
          this.loading = false;
        });
      }
    }else{
      this.loading = true;
      user = new User( undefined, userName,userEmail, password, [] );
      this.subscription2$ = this.authService.signIn(user).subscribe((data:User)=>{
       this.checkSigninResult(data)
},
      (err: HttpErrorResponse)=>{
        this.error = true;
        this.errorMsg = err.message;
        this.loading = false;
      })
    }
  }

  switchFormType(){
    this.signup = !this.signup
  }


  checkSigninResult(data: User){
    let result = typeof(data)
    if(result == 'string'){
      this.error = true;
      this.errorMsg = data;
      this.loading = false;
    }else{
      this.setLocalStorage(data)
      this.goToAccount(data)
    }
  }


  goToAccount(user: User){
    this.user = user;
     if(user.userAccounts.length != 0){    
      this.accountId = user.userAccounts[0].accountId
       this.route.navigate([`sharedAccount/${user.userId}/${this.accountId}`])
     }else{
       this.route.navigate([`newSharedAccount/${user.userId}`])
     }
  }

  ngOnDestroy(){
    this.subscription1$?.unsubscribe();
    this.subscription2$?.unsubscribe();
  }

}
