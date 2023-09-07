import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient){

  }
  //add data of cart in  json 
carturl=' http://localhost:3000/cart/'


//***for adding into card means in json****//
addToCart(item:any){
      console.log('in addtocart user service');
      return this.http.post(this.carturl,item);
  }
  //***for getting data of json cart***//
  getCarkItem(){
    return this.http.get(this.carturl)
  }

  removecake(id:any){
    return this.http.delete(this.carturl+id)
  }


//**************post url**************************
  postUrl = 'https://jsonplaceholder.typicode.com/posts/'

methodofGet(id:any){
  return this.http.get( this.postUrl+id)
}
methodofallgetdata(){
  return this.http.get(this.postUrl)
}
}
