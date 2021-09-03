import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SearchService } from '../search-service/search.service';
import { Repo } from '../repo';

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
  ghRepos: Repo[] = [ 
   ]
  
  localRepo: any

  getUser(info) {
    this.showInfo = true;
    this.userInfo.makeUser(info.userName).subscribe(infoName=>{
      this.userDetails = infoName
      this.userProfile.userName = this.userDetails.login
      this.userProfile.avatar = this.userDetails.avatar_url
      this.userProfile.bio = this.userDetails.bio
      this.userProfile.followers = this.userDetails.followers
      this.userProfile.following = this.userDetails.following
      
    })

  
  

  


    this.userInfo.getRepo(info.userName).subscribe(repoData=>{
      this.localRepo = repoData
      for (let index = 0; index < this.localRepo.length; index++) {
      this.ghRepos[index] = new Repo("","","","",0)
        this.ghRepos[index].repoName = this.localRepo[index].name;
        this.ghRepos[index].repodescription = this.localRepo[index].description;
        this.ghRepos[index].repolanguage = this.localRepo[index].language;
        this.ghRepos[index].repoStars = this.localRepo[index].stars;
        this.ghRepos.push(this.ghRepos[index])
      }

    })
    

    

  }

  
  
  

  

}



