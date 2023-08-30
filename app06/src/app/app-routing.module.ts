import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { allowLoggedInUserOnlyGuard } from './guards/allow-logged-in-user-only.guard';
import { LoginRestrictedComponent } from './login-restricted/login-restricted.component';
import { allowAdminsOnlyGuard } from './guards/allow-admins-only.guard';
import { allowConsumersOnlyGuard } from './guards/allow-consumers-only.guard';

const routes: Routes = [
  { path:'',pathMatch:'full',component:LoginComponent},
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
