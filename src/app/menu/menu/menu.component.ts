import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Animations } from './Animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
   Animations.animTrigger, Animations.menuItemOne, Animations.menuItemTwo, Animations.menuItemThree, Animations.menuItemFour,
  ],
})
export class MenuComponent implements OnInit {


  menuIsOpen: boolean = false;
  menuHasOpened:boolean = false;
  disableMenuButton:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){ 
    this.menuIsOpen = !this.menuIsOpen;

    setTimeout(()=>{
      this.menuHasOpened = ! this.menuHasOpened
    }),500
  }
}
