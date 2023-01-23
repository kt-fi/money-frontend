import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SharedAccount } from './shared-account';
import { Transaction } from './transaction';
import { environment } from '../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SharedAccountService {

  loader$ = new BehaviorSubject(false)

  userBalance = new Subject();
  userTransactions = new Subject<Transaction[]>();

  url: string = environment.url;

  constructor(private http:HttpClient) { }

  createNewSharedAccount( accountName: string, creatorId: string ):Observable<SharedAccount>{
    return this.http.post<SharedAccount>(`${this.url}/sharedAccount/newHouseAccount`, {accountName, creatorId})
  }

  getUserBalance(userId: string, accountId: string){
    this.loader$.next(true)
    return this.http.get(`${this.url}/sharedAccount/getUserBalance/${userId}/${accountId}`).subscribe((data:any) =>{
      this.userBalance.next(data)
    })
  }

  getUserTransactions(userId:string, accountId:string){
     this.http.get<Transaction[]>(`${this.url}/sharedAccount/getUserTransactions/${userId}/${accountId}`).subscribe((data:any)=> {
        this.userTransactions.next(data.transactions);
    })
  }

  getAccountUsers(accountId:string):Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/sharedAccount/getAccountUsers/${accountId}`)
  }

}
