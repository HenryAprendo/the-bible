import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenCloseMenuService {

  state: boolean = false;

  menu$ = new BehaviorSubject<boolean>(false);

  menu = this.menu$.asObservable();

  constructor() { }

  toggleState() {
    this.state = !this.state;
    this.menu$.next(this.state);
  }


}
