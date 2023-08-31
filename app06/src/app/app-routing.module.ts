import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginRestrictedComponent } from './login-restricted/login-restricted.component';
import { allowAdminsOnlyGuard } from './guards/allow-admins-only.guard';
import { allowConsumersOnlyGuard } from './guards/allow-consumers-only.guard';
import { allowAnonymousUsersOnlyGuard } from './guards/allow-anonymous-users-only.guard';
 
const routes: Routes = [
  { path:'',pathMatch:'full',component:LoginComponent, canActivate:[allowAnonymousUsersOnlyGuard]},
  { path:'err',component:LoginRestrictedComponent},
  { path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate:[allowAdminsOnlyGuard] 
  },
  { path: 'consumer', 
    loadChildren: () => import('./consumer/consumer.module').then(m => m.ConsumerModule),
    canActivate:[allowConsumersOnlyGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
