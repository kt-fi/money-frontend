import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  url: string = environment.url;

  constructor(private http: HttpClient) { }


  getNotifications(userId:string){
    return this.http.get(`${this.url}/user/notifications/${userId}`)
  }

}
