import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signup: boolean = true;

  form?: any;
  error: boolean = false;
  errorMsg?: any;

  submitted: boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('',[ Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[ Validators.required, Validators.email]),
      password: new FormControl('', [ Validators.required, Validators.minLength(5)]),
      repeatPassword: new FormControl('')
    })
  }

  submitForm(form: FormGroup){
    this.error = false;
    let userName = form.value.userName;
    let userEmail =  form.value.email;
    let password = form.value.password;
    let user;
    
    this.submitted= true;

    if(this.signup){
     
      if(password != form.value.repeatPassword){
        this.error = true;
        this.errorMsg = "Passwords Do Not Match";
        return;
      }else{
        user = new User( undefined, userName, userEmail, password );
        this.authService.signUp(user).subscribe((data:User | string)=>{
          let result = typeof(data)
          if(result == 'string'){
            this.error = true;
            this.errorMsg = data;
          }else{
            console.log(data)
          }
  },
        (err: HttpErrorResponse)=>{
          this.error = true;
          this.errorMsg = err.message;
        });
      }
    }else{
      user = new User( undefined, userName,userEmail, password );
      this.authService.signIn(user).subscribe((data:User | string)=>{
        let result = typeof(data)
        if(result == 'string'){
          this.error = true;
          this.errorMsg = data;
        }else{
          console.log(data)
        }
},
      (err: HttpErrorResponse)=>{
        this.error = true;
        this.errorMsg = err.message;
      })
    }
  }

  switchFormType(){
    this.signup = !this.signup
  }

}
