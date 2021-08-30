import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  user = new User("","",0,0,0,"")
   
  @Output() submitted = new EventEmitter<User>();
  searchUser(){
    this.submitted.emit(this.user)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
