import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  modalIsOpen:boolean = false;
  constructor() { }

  toggleModal(command: string, data:any):any{
    const event = new CustomEvent(command, {
      bubbles: true,
      detail: data
    })
  
    return event;
  }

}
