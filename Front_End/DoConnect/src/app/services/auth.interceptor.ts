import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SigninService } from "./signin.service";



@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private _signin:SigninService){}
  intercept(
    req: HttpRequest<any>,
     next: HttpHandler
     ): Observable<HttpEvent<any>> {
    // add the jwt token which stored in locastorage
    let authReq = req;
      const token = this._signin.getToken();
      if(token!=null){
        authReq = authReq.clone({setHeaders:{Authorization:`Bearer ${token}`},
      });
      }
      return next.handle(authReq);
  }

}

export const authInterceptorProviders=[
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi: true,
  }
];
