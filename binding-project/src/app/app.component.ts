import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2> Binding page </h2>
    <input type="This is an input" value="Some value">
    <br>
    <input [id]="testFromClassId" type="This is an input" value="Id is from class.">
    <br>
    <input id={{testFromClassId}} type="This is an input" value="Id is from class.">
    <br>
    <input disabled type="This is an input" value="This is disabled">
    <br>
    <input disabled="false" type="This is an input" value="This is with disabled set to false with quote">
    <br>
    <input disabled={{false}} type="This is an input" value="This is with disabled set to false with interpolation">
    <br>
    <input [disabled]="false" type="This is an input" value="This is with disabled set to false with binding.">
    <br>
    <input [disabled]="true" type="This is an input" value="This is with disabled set to true with binding.">
    <br>
    <input [disabled]="isInputDisabled1" type="This is an input" value="This is with disabled set to true from class.">
    <br>
    <input [disabled]="isInputDisabled2" type="This is an input" value="This is with disabled set to false from class.">
    <br><br>
    <app-class-binding></app-class-binding>
    <br><br>
    <app-style-binding></app-style-binding>
    <br><br>
    <app-event-binding></app-event-binding>
    <br><br>
    <app-template-reference></app-template-reference>
    <br><br>
    <app-two-ways-binding></app-two-ways-binding>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-project';
  public isInputDisabled1 = true;
  public isInputDisabled2 = false;
  public testFromClassId = "idFromClass";
}
