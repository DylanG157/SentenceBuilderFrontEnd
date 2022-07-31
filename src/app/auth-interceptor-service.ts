import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: req.headers.append(
        'Authorization',
        `Bearer ${localStorage.getItem('accessToken')} `
      ),
    });
    return next.handle(modifiedRequest).pipe(tap((event) => {}));
  }
}
