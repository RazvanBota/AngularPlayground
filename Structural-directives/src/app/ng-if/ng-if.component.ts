import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
    <h1>NgIf</h1>
    <p *ngIf="true">This text is displayed always because the ngIf will be always true.</p>
    <p *ngIf="displayText">This text is displayed if displayText is true.</p> 
    <p *ngIf="!displayText; else elseText">This text is displayed if condition from if else is true.</p>
    <ng-template #elseText>
      <p>This text is displayed if condition from if else is false.</p>
    </ng-template>

    <div *ngIf="!displayText; then trueCondition; else falseCondition;"></div>

    <ng-template #trueCondition>
      <p>This text is from block when the condition is true.</p>
    </ng-template>

    <ng-template #falseCondition>
      <p>This text is from block when the condition is false.</p>
    </ng-template>
    `,
  styles: []
})
export class NgIfComponent implements OnInit {

  displayText = true;
  constructor() { }

  ngOnInit() {
  }

}
