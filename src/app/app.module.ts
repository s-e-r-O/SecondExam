import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { FreeContentComponent } from './free-content/free-content.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FreeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
