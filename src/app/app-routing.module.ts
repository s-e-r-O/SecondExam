import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }      from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FreeContentComponent } from './free-content/free-content.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'free', component: FreeContentComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]	
})
export class AppRoutingModule { }
export const RoutingComponents = [MenuComponent]