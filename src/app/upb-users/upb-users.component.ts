import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import data from '../../../data.json';
import config from '../../../config.json';

@Component({
  selector: 'app-upb-users',
  templateUrl: './pageOne.html'
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
