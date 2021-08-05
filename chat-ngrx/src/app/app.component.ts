import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  showComponent() {
    const redirectRoute: string[] = ['/componentstore'];
    this.router.navigate(redirectRoute);
  }

  showNormal() {
    const redirectRoute: string[] = ['/normalstore'];
    this.router.navigate(redirectRoute);
  }
}
