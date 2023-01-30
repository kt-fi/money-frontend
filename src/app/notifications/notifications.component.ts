import { Component, OnInit } from '@angular/core';
import { SharedAccountService } from '../shared-account.service';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  userId?: any;

  notifications?: any;

  constructor(private notificationService: NotificationsService, private sharedAccountService: SharedAccountService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("moneyAccountUserId")
    this.notificationService.getNotifications(this.userId).subscribe((data:any)=>{
      this.notifications = data;
      console.log(data)
    })
  }

  acceptInvite(accountId:string) {
    this.sharedAccountService.joinSharedAccount(accountId, this.userId).subscribe((data)=>{
      console.log(data)
    })
  }

}
