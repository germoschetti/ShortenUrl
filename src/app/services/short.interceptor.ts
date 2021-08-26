import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = '895f64cc493458769168afb35b1dd03cfa1f474c'
    request = request.clone({setHeaders: {Authorization: 'Bearer ' + TOKEN}})
    return next.handle(request);
  }
}
