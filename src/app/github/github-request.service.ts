import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { User } from '../user';
import { Repository } from '../repository';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  baseURL: string = 'https://api.github.com';
  constructor(private http: HttpClient) {
  }

  getRepos(userName: string): Observable<Repository[]> {
       return this.http.get<Repository[]>(this.baseURL + '/users/' + userName + '/repos');
  }

  getUsers(userName: string): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + '/users/' + userName);

  }
}
