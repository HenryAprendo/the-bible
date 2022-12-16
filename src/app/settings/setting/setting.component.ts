import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { Color } from './../../models/color.models';
import { ConfigService } from './../../services/config.service';

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule],
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  //paleta de colores
  colors: Color[] = [
    { id:'1', color: 'lightsalmon', selected: false },
    { id:'2', color: 'orangered', selected: false },
    { id:'3', color: 'lightblue', selected: false },
    { id:'4', color: 'brown', selected: false },
    { id:'5', color: 'lightpink', selected: false },
    { id:'6', color: 'violet', selected: false },
    { id:'7', color: 'black', selected: false },
    { id:'8', color: 'cadetblue', selected: false },
    { id:'9', color: 'lightgreen', selected: false },
    { id:'10', color: 'orange', selected: false },
    { id:'11', color: 'green', selected: false },
    { id:'12', color: 'darkblue', selected: false },
  ];

  title:string = 'Ajustes';

  currentColor!: string;

  constructor(private config: ConfigService){};

  ngOnInit() {
    this.config.suscriptionTheme
      .subscribe( color => {
        this.currentColor = color;
        const index = this.colors.findIndex(item => item.color === color);
        if(index >= 0) {
          this.colors[index].selected = true;
        }
      })
  }

  chooseColor(color:string, id:string) {
    this.colors.forEach(item => item.selected = false);
    this.config.setColor(color);
  }

}









