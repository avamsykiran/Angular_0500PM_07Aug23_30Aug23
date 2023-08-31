import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const allowAnonymousUsersOnlyGuard: CanActivateFn = (route, state) => {
  let userService = inject(UserService);
  let result=null;

  console.log(userService.isloggedIn());

  if(userService.isloggedIn()){
    if(userService.getRole()=="ADMIN"){
      result = createUrlTreeFromSnapshot(route,["/admin"]);
    } else{
      result = createUrlTreeFromSnapshot(route,["/consumer"]);
    }
  }else{
    result=true;
  }

  return result; 
};