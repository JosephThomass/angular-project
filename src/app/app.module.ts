import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { NAVComponent } from './nav/nav.component';
import { AvatorComponent } from './avator/avator.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    NAVComponent,
    AvatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
