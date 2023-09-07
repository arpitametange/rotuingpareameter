import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CartComponent } from './cart/cart.component';
import { MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostdetailsComponent,
    CakelistComponent,
    CakedetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
