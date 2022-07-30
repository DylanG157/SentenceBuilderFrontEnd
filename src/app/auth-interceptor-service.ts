import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType} from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';


@Injectable({ providedIn: 'root' })

export class AuthInterceptorService implements HttpInterceptor {

    constructor(
        private http: HttpClient,
        private dataStorageService: DataStorageService,
      ) {}
    intercept(req: HttpRequest<any>, next : HttpHandler){
        console.log("There request is coming");

        const modifiedRequest = req.clone({headers: req.headers.append('Authorization', `Bearer ${localStorage.getItem('accessToken')} `)})
        return next.handle(modifiedRequest).pipe(tap(event =>{
            console.log(event)
            if (event.type === HttpEventType.Response){
                console.log(event.body)
            }
        }));

    }
}