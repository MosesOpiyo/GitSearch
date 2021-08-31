import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private userInfo:SearchService) { }

  ngOnInit(): void {
  }
  userProfile = new User("","",0,0,0,"")
  userDetails: any
  showInfo:boolean = false;
  ghRepos: any[]

  getUser(info) {
    this.showInfo = true;
    this.userInfo.makeUser(info.userName).subscribe(infoName=>{
      this.userDetails = infoName
      this.userProfile.userName = this.userDetails.login
      this.userProfile.avatar = this.userDetails.avatar_url
      
    })

  }
  

  

}
