import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser!: User;
  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = "http://localhost:8787/users";
  }

  isloggedIn(): boolean {
    return this.currentUser ? true : false;
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user);
  }

  login(userName: string, password: string): Observable<boolean> {
    return this.httpClient.get<User[]>(this.apiUrl + "?userName=" + userName)
      .pipe(
        map(
          users => {
            let user = users && users[0];
            if (user && user.password == password) {
              this.currentUser = user;
            }
            return this.isloggedIn();
          }
        )
      )
  }

  getRole():string {
    return this.currentUser.role;
  }
}
