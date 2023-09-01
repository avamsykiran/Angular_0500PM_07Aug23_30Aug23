import { Component } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  title:string;
  menuItems!:MenuItem[];
  user!:User|null;

  constructor(private userService:UserService,private router:Router){
    this.title="Secure Budget Tracker";
    userService.userChanged.subscribe({
      next: user => {
        this.user=user;
        this.menuItems=[];
        if(!user){
          this.menuItems.push({linkText:"Sign In",link:"/"});
          this.menuItems.push({linkText:"Sign Up",link:"/signUp"});
        }else if(user.role=="ADMIN"){
          this.menuItems.push({linkText:"Consumers List",link:"/"});
          this.menuItems.push({linkText:"Account Headers List",link:"/"});
        }else if(user.role=="CONSUMER"){
          this.menuItems.push({linkText:"Transactions List",link:"/"});
          this.menuItems.push({linkText:"New Transaction",link:"/"});
        }
      }
    });
  }

  signOut(){
    this.userService.logout();
    this.router.navigateByUrl("/");
  }
}
