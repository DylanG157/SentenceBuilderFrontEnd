import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {

    //Used to get an access token for the back-end API's
    this.http
      .post<any>(`${environment.apiUrl}/authentication/token`, {
        client_id:
          `${environment.client_id}`,
        client_secret:
          `${environment.client_secret}`,
      })
      .subscribe((res) => {
        localStorage.setItem('accessToken',res.accessToken)
      });
  }
}
