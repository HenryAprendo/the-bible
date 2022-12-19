import { trigger, style, transition, animate, state } from "@angular/animations";



export const flyInOutX = trigger('flyInOutX', [
  state('in', style({ transform: 'translateX(0)'})),
  transition('void => *', [
    style({ transform: 'translateX(-100%'}),
    animate(50)
  ]),
  transition('void => *', [
    animate(100, style({ transform: 'translateX(100%'}))
  ])
]);

export const flyInOutY = trigger('flyInOutY', [
  state('in', style({ transform: 'translateY(0)'})),
  transition('void => *', [
    style({ transform: 'translateY(-100%'}),
    animate(150)
  ]),
  transition('void => *', [
    animate(100, style({ transform: 'translateY(100%'}))
  ])
]);
