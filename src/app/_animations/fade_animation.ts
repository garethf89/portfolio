import { trigger, state, animate, group, transition, query, style } from '@angular/animations';

export const fadeAnimation =

  trigger('fadeInAnimation', [

    // route 'enter' transition
    transition(':enter', [

      // css styles at start of transition
      style({
        opacity: 0,
        transform: 'translateY(10px)'
      }),

      // animation and styles at end of transition
      animate('.5s', style({
        opacity: 1,
        transform: 'translateY(0px)'
      }))
    ]),


    // route 'enter' transition
    transition(':leave', [

      // css styles at start of transition
      style({
        opacity: 1,
        transform: 'translateY(10px)'
      }),

      // animation and styles at end of transition
      animate('.5s', style({
        opacity: 0,
        transform: 'translateY(0px)'
      }))
    ])

  ]);