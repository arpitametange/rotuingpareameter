import { Component, DoCheck, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
  title = 'parameter';
  items:any=0
  constructor(private service:ServiceService){

  }
  ngDoCheck(): void {
    this.service.getCarkItem().subscribe((res:any)=>{
      this.items=res.length
    })  }
  ngOnInit(): void {
      }


}
