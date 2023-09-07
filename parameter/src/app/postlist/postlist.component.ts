import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent {

  
  array:any
constructor(private service:ServiceService){
  this.service.methodofallgetdata().subscribe((res:any)=>{
    console.log(res);
    this.array=res
  })
}


}
