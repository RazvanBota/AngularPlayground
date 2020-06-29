import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h2> Binding class </h2>
    <h2 class="text-succes"> Green title with css class.</h2>
    <h2 [class]="successClass"> Green title with binding.</h2>
    
    <h2 class="text-special" [class]="successClass"> Green title with font from style and color from binding. !!NOT CORRECT!!</h2>
    <h2 [class.text-danger]="hasError">Title is red if the variable hasError is true.</h2>
    <h2 [class.text-danger]="isError">Title is red if the variable isError is true.</h2>
    <h2 [ngClass]="messageClasses">This title have applied a class and a random generator for the color of the text(red or green only for now).</h2>
  `,
  styles: [`
  .text-succes{
    color: green;
  }
  .text-danger{
    color:red;
  }
  .text-italic{
    font-style: italic;
  }
  `]
})
export class ClassBindingComponent implements OnInit {

  constructor() { }
  public successClass = "text-succes";
  public hasError = Math.random() <= 0.5;
  public isError =  true;
  
  
  public isSPecial = true;
  public messageClasses = {
    "text-succes": !this.hasError,
    "text-danger": this.hasError,
    "text-italic": this.isSPecial
  }
  ngOnInit() {
    console.log(this.hasError);
  }

}
