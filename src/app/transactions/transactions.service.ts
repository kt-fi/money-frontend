import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Transaction } from '../transaction';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  
  url: string = environment.url;

  constructor(private http: HttpClient) { }


  createNewTransaction(transaction: any):Observable<Transaction>{
    return this.http.post<Transaction>(`${this.url}/transactions/newTransaction`, transaction)
  }

onDeleteTransaction(transactionId:string, userId:string, accountId:string){
  return this.http.delete<Transaction>(`${this.url}/transactions/deleteTransactionById/${transactionId}/${userId}/${accountId}/`).subscribe((data)=>{
    console.log(data)
  })
}
  

}
