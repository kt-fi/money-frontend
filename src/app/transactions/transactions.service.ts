import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Transaction } from '../transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }


  createNewTransaction(transaction: any):Observable<Transaction>{
    return this.http.post<Transaction>('http://localhost:3000/transactions/newTransaction', transaction)
  }



}
