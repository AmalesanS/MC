import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authentication:AuthenticationService) { }


  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    console.log("Interceptor is working");
    request=request.clone({
      setHeaders:{
        Authorization:`Bearer ${this.authentication.getToken()}`
      }
    }
    );

    return next.handle(request);
  }
}
