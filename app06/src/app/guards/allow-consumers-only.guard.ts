import { inject } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

export const allowConsumersOnlyGuard: CanActivateFn = (route, state) => {
  let userService = inject(UserService);
  return userService.isloggedIn() && userService.getRole()=="CONSUMER" ? true : createUrlTreeFromSnapshot(route,["/err"]);
};
