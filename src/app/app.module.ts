import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FreeContentComponent } from './free-content/free-content.component';
import { UpbUsersComponent } from './upb-users/upb-users.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    MenuComponent,
    FreeContentComponent,
    UpbUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
