import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
    <h1>NgFor</h1>
    <div *ngFor="let color of colors; index as i">
      <h2>{{i+1}}.{{color}}</h2>
    </div>
    <p>Which is the first elem of the array:</p>
    <div *ngFor="let color of colors; first as f">
      <h2>{{color}}( {{f}} )</h2>
    </div>  
    <p>Which is the last elem of the array:</p>
    <div *ngFor="let color of colors; last as l">
      <h2>{{color}}( {{l}} )</h2>
    </div>  
    <p>Which elems are on the odd positions:</p>
    <div *ngFor="let color of colors; odd as o">
      <h2>{{color}}( {{o}} )</h2>
    </div> 
    <p>Which elems are on the even positions:</p>
    <div *ngFor="let color of colors; even as e">
      <h2>{{color}}( {{e}} )</h2>
    </div> 
    `,
  styles: []
})
export class NgForComponent implements OnInit {

  public colors = ["red", "blue", "green", "yellow"]

  constructor() { }

  ngOnInit() {
  }

}
