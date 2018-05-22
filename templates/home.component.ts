import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import * as config from '../../../<%= configFileName %>';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  readonly title : string = (<any>config).appName;

  constructor(title:Title)
  {
  	title.setTitle(this.title); 
  }

  ngOnInit() {
  }

}
