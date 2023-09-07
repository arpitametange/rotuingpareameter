import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
 
  //routing paramter
  //post
  {path:'postlist',component:PostlistComponent},
  {path:'postdetails/:id',component:PostdetailsComponent},

  //cake
  {path:'cart',component:CartComponent},
  {path:'cakelist',component:CakelistComponent},
  {path:'cakedetails/:id',component:CakedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
