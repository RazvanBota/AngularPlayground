import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h1>Event binding</h1>
    <p>Check the console.Button now has value: {{greeting}} </p>
    <button (click)="onClick()">Joke</button>
    <br><br>
    <button (click)="onSeccondButtonClick($event)">Function in class.</button>
    <br><br>
    <button (click)="greeting='Value assign from click on 3rd button.'">Function on the html line.</button>
  `,
  styles: []
})

export class EventBindingComponent implements OnInit {

  constructor() { }
  public greeting = "";

  onClick(){
    console.log("You presed that button?");
    this.greeting = "Someone presed the button.";
  }

  onSeccondButtonClick(event){
    console.log(event);
    this.greeting = event.type
  }
  
  ngOnInit() {
  }

}
