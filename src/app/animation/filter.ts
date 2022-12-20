import { trigger, style, transition, animate, state, query, stagger } from "@angular/animations";


export const filter =    trigger('filterAnimation', [
  transition(':enter, * => 0, * => -1', []),
  transition(':increment', [
    query(':enter', [
      style({ opacity: 0, width: 0 }),
      stagger(20, [
        animate('10ms ease-out', style({ opacity: 1, width: '*' })),
      ]),
    ], { optional: true })
  ]),
  transition(':decrement', [
    query(':leave', [
      stagger(10, [
        animate('10ms ease-out', style({ opacity: 0, width: 0 })),
      ])
    ], {optional:true})
  ]),
])
