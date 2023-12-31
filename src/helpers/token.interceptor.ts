import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenHandler } from './tokenHandler';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private TokenHandler: TokenHandler) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.TokenHandler.getToken();
    if (!token) {
      return next.handle(request);
    }

    const clonedRequest = request.clone({
      headers: request.headers.set('Authorization', `token ${token}`)
    });
    return next.handle(clonedRequest);
  }
}
