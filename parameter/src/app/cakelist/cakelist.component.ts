import { Component } from '@angular/core';
import { CakeserviceService } from '../service/cakeservice.service';
import { Subscription } from 'rxjs';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent {
  cakes:any=[];

  
  constructor(private http : CakeserviceService,private service:ServiceService) { }
  
  ngOnInit() {
      this.http.getcakedata().subscribe(res=>{
       this.cakes = res;
       console.log('cake list',this.cakes);
    })
}

addToCart(id:any ,url:any, title:any){
  //console.log(id,url, title);
    let obj = {
               'id':id,
               'imgUrl':url,
               'title':title
             }
     console.log(obj);
      this.service.addToCart(obj).subscribe(res=>{
       console.log(res);
       
      })       
 }


}
