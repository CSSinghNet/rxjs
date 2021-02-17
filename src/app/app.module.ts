import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObServableComponent } from './ob-servable/ob-servable.component';
import { SubjectComponent } from './subject/subject.component';
import { Component1Component } from './Components/component1/component1.component';
import { Component2Component } from './Components/component2/component2.component';
import { Component3Component } from './Components/component3/component3.component';

@NgModule({
  declarations: [
    AppComponent,
    ObServableComponent,
    SubjectComponent,
    Component1Component,
    Component2Component,
    Component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
