import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-gh-repos',
  templateUrl: './gh-repos.component.html',
  styleUrls: ['./gh-repos.component.css']
})
export class GhReposComponent implements OnInit {

  @Input() ghRepos: any[]

  constructor() { }

  ngOnInit(): void {
  }

}
