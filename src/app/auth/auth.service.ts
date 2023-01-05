import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../user';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = environment.url;

  constructor(public http: HttpClient) { }

  signIn(user: User):Observable<User>{
  let data = this.http.post<User>(`http://localhost:3000/user/login`, user)
  return data;
  }

  signUp(user:User){
    let data =  this.http.post<any>(`http://localhost:3000/user/newUser`, user)
    return data;
  }
}
