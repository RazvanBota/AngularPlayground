import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-ng-if></app-ng-if>
    <br><br>
    <app-ng-switch></app-ng-switch>
    <br><br>
    <app-ng-for></app-ng-for>
  `,
  styles: []
})
export class AppComponent {
  title = 'Structural-directives';
}
