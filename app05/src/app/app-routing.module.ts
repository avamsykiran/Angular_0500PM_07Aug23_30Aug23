import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumersListComponent } from './consumers-list/consumers-list.component';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { TxnsComponent } from './txns/txns.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/list'},
  {path:"list",component:ConsumersListComponent},
  {path:'add',component:ConsumerFormComponent},
  {path:'edit/:cid',component:ConsumerFormComponent},
  {path:'txns/:cid',component:TxnsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
