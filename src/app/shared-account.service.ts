import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { SharedAccount } from './shared-account';
import { Transaction } from './transaction';
import { User } from './user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedAccountService {

  userBalance = new Subject();
  userTransactions = new Subject<Transaction[]>();

  url: string = environment.url;

  constructor(private http:HttpClient) { }

  createNewSharedAccount( accountName: string, creatorId: string ):Observable<SharedAccount>{
    return this.http.post<SharedAccount>(`${this.url}/sharedAccount/newHouseAccount`, {accountName, creatorId})
  }

  getUserBalance(userId: string, accountId: string){
    return this.http.get(`${this.url}/sharedAccount/getUserBalance/${userId}/${accountId}`).subscribe((data:any) =>{
      this.userBalance.next(data)
    })
  }

  getUserTransactions(userId:string, accountId:string){
     this.http.get<Transaction[]>(`${this.url}/sharedAccount/getUserTransactions/${userId}/${accountId}`).subscribe((data:any)=> {
        this.userTransactions.next(data.transactions);
    })
  }

  getAccountUsers(accountId:string):Observable<string[]>{
    return this.http.get<string[]>(`${this.url}/sharedAccount/getAccountUsers/${accountId}`)
  }

}
