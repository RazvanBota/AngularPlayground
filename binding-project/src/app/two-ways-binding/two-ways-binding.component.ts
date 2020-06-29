import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-ways-binding',
  template: `
    <h1>Two ways binding</h1>
    <input [(ngModel)]="name" type="text">
    {{name}}
  `,
  styles: []
})
export class TwoWaysBindingComponent implements OnInit {

  public name="";

  constructor() { }

  ngOnInit() {
  }

}
