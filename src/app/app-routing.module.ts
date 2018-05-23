import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }      from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FreeContentComponent } from './free-content/free-content.component';
import { UpbUsersComponent } from './upb-users/upb-users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'free', component: FreeContentComponent},
  {path: 'upb', component: UpbUsersComponent}

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]	
})
export class AppRoutingModule { }
export const RoutingComponents = [MenuComponent]
