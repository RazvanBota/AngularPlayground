import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { DivComponentComponent } from './div-component/div-component.component';
import { AttributeComponentComponent } from './attribute-component/attribute-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    DivComponentComponent,
    AttributeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
