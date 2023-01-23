import { Component, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moneycontrol';

@Output()
modalIsOpen?:boolean = false;
data?:any;

@Output()
messageModalIsOpen?: boolean = false;
messageData:any;


  @HostListener('OpenModal', ['$event'])
  onCustomEventCaptured(event: any) {
    if(event.detail.event === 'form'){
       this.modalIsOpen = event.detail.isOpen;
        this.data = {'userId': event.detail.data.userId, 'accountId': event.detail.data.accountId}
    }else if(event.detail.event === 'message'){
      this.messageData = event.detail.data;
      this.messageModalIsOpen = !this.messageModalIsOpen;
      setTimeout(()=>{
        this.messageModalIsOpen = !this.messageModalIsOpen;
      },4000)
    }
   
}
}
