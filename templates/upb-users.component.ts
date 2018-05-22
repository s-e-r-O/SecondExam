import { Component, OnInit } from '@angular/core';
import data from '../../../<%= dataFileName %>';

@Component({
  selector: 'app-upb-users',
  templateUrl: './<%= pageOneName %>',
  styleUrls: ['./upb-users.component.css']
})
export class UpbUsersComponent implements OnInit 
{
  users = [];
  
  constructor() { }

  ngOnInit() {
    this.users = data.users;
  }

}
