import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
    <h1>Ng-Switch</h1>
    <div [ngSwitch]="getColor()">
      <div *ngSwitchCase="'red'">This text should be red.</div>
      <div *ngSwitchCase="'blue'">This text should be blue.</div>
      <div *ngSwitchCase="'green'">This text should be green.</div>
      <div *ngSwitchDefault>This text is default.</div>
    </div>
  `,
  styles: []
})
export class NgSwitchComponent implements OnInit {

  public collors: Array<{position: number, color: string}> = [
    {position: 0, color: 'red'},
    {position: 1, color: 'green'},
    {position: 2, color: 'blue'},
    {position: 3, color: 'Dark'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

  getRandom(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getColor(){
    return this.collors[this.getRandom(0, 3)].color;
  }
}
