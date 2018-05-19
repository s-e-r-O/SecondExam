import { Component } from '@angular/core';
import * as data from '../../../config.json';
import { Title } from '@angular/platform-browser'; 
@Component({
  selector: 'app-free-content',
  templateUrl: './free-content.component.html',
  styleUrls: ['./free-content.component.css']
})
export class FreeContentComponent{

  const title : string = data.freeContent.title;
  const content : string = data.freeContent.body;

  constructor(title:Title)
  {
  	title.setTitle(this.title); 
  }

}