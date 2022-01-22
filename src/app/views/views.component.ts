import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';
import { GithubRequestService } from '../github/github-request.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css'],
  providers: [GithubRequestService]
})
export class ViewsComponent implements OnInit {
  userName = "";
  repository: Repository[];
  // user: User[];

  users:any = {}

  constructor( private githubService: GithubRequestService ) {
  }



  getUsername(event: any){

    this.githubService.getUsers(this.userName).subscribe((data) => {

      this.users = data
      console.log(this.users)

    })
  }

  onClick(){

    this.githubService.getUsers(this.userName)
     this.getUsername(Event)
    //  console.log(this.storedUsers)
    this.getRepos()
  }



  getRepos(){

    this.githubService.getRepos(this.userName).subscribe((data) => {

      this.repository = data
      console.log(this.repository)

    })
  }
  
  ngOnInit() {
  }
}
