import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import data from '../../../<%= dataFileName %>';
import config from '../../../<%= configFileName %>';

@Component({
  selector: 'app-upb-users',
  templateUrl: './<%= pageOneName %>'
})
export class UpbUsersComponent implements OnInit 
{
  readonly users = (<any>data).users;
  readonly title : string = (<any>config).appName;
  
  constructor(title:Title)
  {
  	title.setTitle(this.title); 
  }

  ngOnInit() {  }

}
