import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h2 style="color:red">Name: {{name}}, Message: {{message}}</h2>
    <h2>This is the pipe for lower case: {{name | lowercase}}</h2>
    <h2>This is the pipe for upper case: {{name | uppercase}}</h2>
    <h2>This is the pipe for title case: {{message | titlecase}}</h2>
    <h2>This is the pipe for slice: {{name | slice:2:5}}</h2>
    <h2>This is the pipe for json: {{person | json}}</h2>

    <br>
    
    <h2>This is the pipe for number(eg. 1): {{5.678 | number:'1.2-3'}}</h2>
    <h2>This is the pipe for number(eg. 2): {{5.678 | number:'2.4-5'}}</h2>
    <h2>This is the pipe for number(eg. 3): {{5.678 | number:'3.1-2'}}</h2>

    <h2>This is the pipe for percent: {{1.25 | percent}}</h2>
    <h2>This is the pipe for currency: {{0.25 | currency}}</h2>
    <h2>This is the pipe for currency for Romania: {{0.25 | currency: 'RON'}}</h2>

    <br>

    <h2>This is the pipe for date: {{date}}</h2>
    <h2>This is the pipe for short full date: {{date | date:'short'}}</h2>
    <h2>This is the pipe for short only date: {{date | date:'shortDate'}}</h2>
    <h2>This is the pipe for short time date: {{date | date:'shortTime'}}</h2>

  `,
  styles: []
})
export class PipesComponent implements OnInit {

  public name = "Razvan";
  public message = "Welcome " + this.name;
  public person = {
    "firstName": "Razvan",
    "lastName": "Marius" 
  }

  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
