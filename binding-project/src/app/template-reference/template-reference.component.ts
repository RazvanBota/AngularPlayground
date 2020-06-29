import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  template: `
    <h1>Template binding</h1>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">myInput.value</button>
    <button (click)="logMessage(myInput)">myInput without value</button>
  `,
  styles: []
})
export class TemplateReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
    console.log(value);
  }
}
