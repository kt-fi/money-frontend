import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuIsOpen:any = new BehaviorSubject(false)

  constructor() { }

  toggleMenu(openClose: boolean){
    this.menuIsOpen.next(openClose)
  
  }
  

}
