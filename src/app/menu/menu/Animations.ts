import { animate, state, style, transition, trigger } from '@angular/animations';

export const Animations = {
   animTrigger:  trigger('openClose', [
        // ...
        state('open', style({
          right: '3rem'
        })),
        state('closed', style({
          right: '-33rem'
        })),
        transition('open => closed', [
          animate('0.4s')
        ]),
        transition('closed => open', [
          animate('0.4s')
        ]),
      ]),

      menuItemOne:  trigger('openClose1', [
        // ...
        state('open', style({
          transform: 'translateX(0rem)'
        })),
        state('closed', style({
          transform: 'translateX(16rem)'
        })),
        transition('open => closed', [
          animate('0.1s 0s')
        ]),
        transition('closed => open', [
          animate('0.1s 0.1s')
        ]),
      ]),

      menuItemTwo:  trigger('openClose2', [
        // ...
        state('open', style({
          transform: 'translateX(0rem)'
        })),
        state('closed', style({
          transform: 'translateX(20rem)'
        })),
        transition('open => closed', [
          animate('0.1s 0.1s')
        ]),
        transition('closed => open', [
          animate('0.1s 0.2s')
        ]),
      ]),

      menuItemThree:  trigger('openClose3', [
        // ...
        state('open', style({
          transform: 'translateX(0rem)'
        })),
        state('closed', style({
          transform: 'translateX(24rem)'
        })),
        transition('open => closed', [
          animate('0.1s 0.2s')
        ]),
        transition('closed => open', [
          animate('0.1s 0.3s')
        ]),
      ]),

      menuItemFour:  trigger('openClose4', [
        // ...
        state('open', style({
          transform: 'translateX(0rem)'
        })),
        state('closed', style({
          transform: 'translateX(28rem)'
        })),
        transition('open => closed', [
          animate('0.1s 0.3s')
        ]),
        transition('closed => open', [
          animate('0.1s 0.4s')
        ]),
      ]),
}