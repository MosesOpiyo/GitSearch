import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userProfile = new User("","",0,0,0,"")
  userDetails: any

}
