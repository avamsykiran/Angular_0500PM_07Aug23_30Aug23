import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  userName!:string;

  constructor(private userService:UserService,private router:Router) {
    this.userName = userService.getUserName();
  }

  signOut(){
    this.userService.logout();
    this.router.navigateByUrl("/");
  }
}
