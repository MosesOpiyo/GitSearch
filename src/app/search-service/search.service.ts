import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) { }

 getUser(userName) {
    return this.httpClient.get(`https://api.github.com/users/${userName}/?access_token=${environment.apikey}`);
  };
  getRepo(userName) {
    return this.httpClient.get(`https://api.github.com/users/${userName}/repos?access_token=${environment.apikey}`)

  }
  getFolllowers(userName) {
    return this.httpClient.get(`https://api.github.com/users/${userName}/followers?access_token=${environment.apikey}`)
  }
  getFolllowing(userName) {
    return this.httpClient.get(`https://api.github.com/users/${userName}/following?access_token=${environment.apikey}`)
  }
    
  

 
}
