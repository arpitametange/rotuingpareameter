import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent   {
  cakeinfo:any=[]
  ngOnInit(){
    this.getdataof()

  }

constructor(private service:ServiceService){

}
getdataof(){
  this.service.getCarkItem().subscribe(res=>{
    this.cakeinfo=res
    console.log('cake in cart',res);
    
  })
}

delete(id:any){
this.service.removecake(id).subscribe({
// console.log('deleted',res);
  next:(data)=>{
console.log(id);
// this.(deletedata,id)
this.getdataof()
  }
})
}

}
