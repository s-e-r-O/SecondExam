import { Component } from '@angular/core';
import * as config from '../../../config.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  readonly pageTwoEnabled : boolean = (<any>config).enablePageTwoLink;
}
