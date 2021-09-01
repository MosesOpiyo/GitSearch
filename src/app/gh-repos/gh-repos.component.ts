import { Component, OnInit,Input } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-gh-repos',
  templateUrl: './gh-repos.component.html',
  styleUrls: ['./gh-repos.component.css']
})
export class GhReposComponent implements OnInit {



  @Input() ghRepos : Repo[]
    constructor() { }

  ngOnInit(): void {
  }

}
