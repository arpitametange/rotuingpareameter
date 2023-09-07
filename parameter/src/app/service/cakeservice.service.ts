import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CakeserviceService {
  // url='https://the-birthday-cake-db.p.rapidapi.com/'; 
  url= 'https://the-birthday-cake-db.p.rapidapi.com/'


  
  constructor(private http:HttpClient) { }

 header =  new HttpHeaders({
  'X-RapidAPI-Key': '38d64a2a1bmshb4d4947595c94edp196e22jsncc07eac18ada',
  'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'

     })


  getcakedata(){
   return this.http.get(this.url,{headers:this.header})
  }

  getallcakedata(id:any){
   return this.http.get(this.url+id,{headers:this.header})
  }

 
}

