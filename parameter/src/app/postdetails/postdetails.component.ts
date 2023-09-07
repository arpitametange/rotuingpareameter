import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent {
  constructor(private postService: ServiceService, private route: ActivatedRoute) { }
array:[]=[]
body:[]=[]
id:[]=[]
userId:[]=[]

  ngOnInit() {
   let id = this.route.snapshot.params['id'];
    this.postService.methodofGet(id).subscribe((res:any) => {
      console.log('data from post details', res)
      this.array=res.title
      this.body=res.body
      this.id=res.id
      this.userId=res.userId

    })
  }
}
