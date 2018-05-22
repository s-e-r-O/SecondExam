import { Component } from '@angular/core';
import * as data from '../../../<%= configFileName %>';
import { Title } from '@angular/platform-browser'; 
@Component({
  selector: 'app-free-content',
  templateUrl: './<%= pageTwoName %>',
  styleUrls: ['./free-content.component.css']
})

export class FreeContentComponent{

  readonly title : string = (<any>data).freeContent.title;
  readonly content : string = (<any>data).freeContent.body;

  constructor(title:Title)
  {
  	title.setTitle(this.title); 
  }

}