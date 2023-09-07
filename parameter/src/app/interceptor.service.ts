import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }
  // intercept(req: HttpRequest<any>, next: HttpHandler):any {
  //   let headers=req.clone({
  //     setHeaders:  {  
  //       'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
  //       'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'

      
  //   }
  //   })
  //   return next.handle(headers)

  }

