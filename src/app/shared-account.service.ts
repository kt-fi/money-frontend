import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { SharedAccount } from './shared-account';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class SharedAccountService {

  userBalance = new Subject();
  userTransactions = new Subject<Transaction[]>();

  constructor(private http:HttpClient) { }

  createNewSharedAccount( accountName: string, creatorId: string ):Observable<SharedAccount>{
    return this.http.post<SharedAccount>('http://localhost:3000/sharedAccount/newHouseAccount', {accountName, creatorId})
  }

  getUserBalance(userId: string, accountId: string){
    return this.http.get(`http://localhost:3000/sharedAccount/getUserBalance/${userId}/${accountId}`).subscribe((data:any) =>{
      this.userBalance.next(data.userBalance)
    })
  }

  getUserTransactions(userId:string, accountId:string){
     this.http.get<Transaction[]>(`http://localhost:3000/sharedAccount/getUserTransactions/${userId}/${accountId}`).subscribe((data:any)=> {
        this.userTransactions.next(data.transactions);
    })
  }

}
