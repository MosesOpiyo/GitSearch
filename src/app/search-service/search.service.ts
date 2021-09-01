import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) { }

 makeUser(userName) {
    return this.httpClient.get(`https://api.github.com/users/${userName}?client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}`);
  };
  getBio(userName) {
    return this.httpClient.get(`https://api.github.com/users/${userName}/bio?client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}`);
  };
  
  getRepo(userName) {
    return this.httpClient.get(`https://api.github.com/users/${userName}/repos?client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}`)

  }
  getFolllowers(userName) {
    return this.httpClient.get(`https://api.github.com/users/${userName}/followers?client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}`)
  }
  getFolllowing(userName) {
    return this.httpClient.get(`https://api.github.com/users/${userName}/following?client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}`)
  }
    
  

 
}
