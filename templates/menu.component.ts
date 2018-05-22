import { Component } from '@angular/core';
import * as config from '../../../<%= configFileName %>';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  readonly pageTwoEnabled : boolean = (<any>config).enablePageTwoLink;
}
