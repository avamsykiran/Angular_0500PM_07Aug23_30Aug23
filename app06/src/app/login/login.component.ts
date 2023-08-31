import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName!:string;
  password!:string;

  errMsg!:string;
  
  constructor(private userService:UserService,private router:Router){

  }

  formSubmited(){
    this.userService.login(this.userName,this.password).subscribe({
      next: isAllowed => {
        if(isAllowed && this.userService.getRole()=="ADMIN"){
          this.router.navigateByUrl("/admin")
        } else if(isAllowed && this.userService.getRole()=="CONSUMER"){
          this.router.navigateByUrl("/consumer")
        }else{
          this.errMsg="Invalid Credits";
        }
      },
      error : err => {
        console.log(err);
        this.errMsg="Unable to check the credits as of now!"
      }
    })
  }
}
