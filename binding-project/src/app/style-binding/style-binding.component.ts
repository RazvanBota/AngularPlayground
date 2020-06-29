import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h1>Style binding</h1>
    <h2 [style.color]="'pink'">This have style binding</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">This have style based on the conditional expression.</h2>
    <h2 [style.color]="highlightColor">This have color from class.</h2>
    <h2 [ngStyle]="objectWithStyles">This have color from class from an object with styles.</h2>
    `,
  styles: []
})

export class StyleBindingComponent implements OnInit {

  constructor() { }
  
  public hasError = Math.random() > 0.5;
  public highlightColor = "orange";
  
  public objectWithStyles = {
    color:"blue",
    fontStyle: "italic"
  }

  ngOnInit() {
  }

}
