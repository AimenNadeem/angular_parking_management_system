import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService  implements HttpInterceptor {

  constructor(private tokenService : TokenService) {}


  intercept(request : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>> {
    
    let token = this.tokenService.getToken();

    if(token){

      request = request.clone({

        withCredentials: true,
        setHeaders: { Authorization: `Bearer ${token}` },

      });
    
    }

    return next.handle(request);

  }

}

export const myHttpInterceptorProvider = [

  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
];
