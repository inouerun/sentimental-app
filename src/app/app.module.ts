import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputAreaComponent } from './components/input-area/input-area.component';
import { OutputAreaComponent } from './components/output-area/output-area.component';

@NgModule({
  declarations: [
    AppComponent,
    InputAreaComponent,
    OutputAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
