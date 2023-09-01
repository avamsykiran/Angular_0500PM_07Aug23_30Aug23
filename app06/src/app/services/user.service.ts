import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser!: User|null;
  apiUrl: string;
  userChanged:BehaviorSubject<User|null>;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = "http://localhost:8787/users";
    if(localStorage.getItem("user")){
      this.currentUser = JSON.parse(localStorage.getItem("user")??"");
    }
    this.userChanged = new BehaviorSubject<User|null>(this.currentUser);
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
              this.currentUser.password="";
              localStorage.setItem("user",JSON.stringify(this.currentUser));
              this.userChanged.next(this.currentUser);
            }
            return this.isloggedIn();
          }
        )
      )
  }

  getRole():string {
    return this.currentUser!.role;
  }

  getUserName():string{
    return this.currentUser!.userName;
  }

  logout(){
    this.currentUser=null;
    localStorage.clear();
    this.userChanged.next(this.currentUser);
  }
}
