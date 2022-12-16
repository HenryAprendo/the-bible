import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private color!:string;

  private colorDefault:string = 'darkblue';

  theme$ = new BehaviorSubject<string>(this.color);
  suscriptionTheme = this.theme$.asObservable();

  constructor(){
    this.getColor();
  }

  setColor(color:string) {
    this.color = color;
    localStorage.setItem('theme', color);
    this.theme$.next(this.color);
  }

  getColor() {
    const data = localStorage.getItem('theme');
    this.color = data ? data : this.colorDefault;
    this.theme$.next(this.color);
  }

}








