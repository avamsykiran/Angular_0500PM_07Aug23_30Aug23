import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const allowAdminsOnlyGuard: CanActivateFn = (route, state) => {
  let userService = inject(UserService);
  return userService.isloggedIn() && userService.getRole()=="ADMIN" ? true : createUrlTreeFromSnapshot(route,["/err"]);
};
