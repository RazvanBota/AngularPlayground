import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation-project';

  public interpolationVariable = "This is an text created with interpolation";
  public siteUrl = window.location.href;
  
  functionToShowVariable(){
    return this.interpolationVariable;
  }
}
