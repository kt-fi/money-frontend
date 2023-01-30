import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SharedAccountService } from 'src/app/shared-account.service';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})
export class NotificationCardComponent implements OnInit {

  userId?:any;

  @Input()
  notification?:any;

  message?: string;

  constructor(private sharedAccountService: SharedAccountService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('moneyAccountUserId')
  }
  
  acceptInvite(accountId:string) {
    this.sharedAccountService.joinSharedAccount(accountId, this.userId).subscribe((data)=>{
      this.message = 'Invitatcion Accepted';
    },(err:HttpErrorResponse)=>{
      this.message = 'Error: Please try again later'
    })
  }

}
