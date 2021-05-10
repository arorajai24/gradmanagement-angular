import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor{
    intercept(request : HttpRequest<any>, next:HttpHandler){

        const authToken = "My auth token";
        const authReq = request.clone({
            setHeaders : { Authorization : authToken}
        })


        return next.handle(authReq);
    }
}
