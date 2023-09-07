import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeserviceService } from '../service/cakeservice.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
  cakeinfo:any
constructor(private router:ActivatedRoute,private cakeservice:CakeserviceService,private service:ServiceService){

}
  ngOnInit(): void {
    let id=this.router.snapshot.params['id']
    this.cakeservice.getallcakedata(id).subscribe((res:any)=>{
      console.log('data by id',res);
      this.cakeinfo=res
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
