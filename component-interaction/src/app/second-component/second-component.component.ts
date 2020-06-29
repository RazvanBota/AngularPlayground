import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-component',
  template: `
    <h2>{{"Hello " + name}}</h2>
    <button (click)="triggerEvent()">Send Event</button>
  `,
  styles: []
})
export class SecondComponentComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  triggerEvent(){
    this.childEvent.emit("This is the message from the child");
  }

}
