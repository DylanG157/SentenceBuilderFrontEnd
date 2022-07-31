import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
      .post<any>('http://localhost:3000/authentication/token', {
        client_id:
          'c3c3c151679142ac3edc95eef4cddb5919e2145369bc09783f8ca1b2ded3745ff33f05556e669e7030473a61917626035aa6a223b3565c1901ad424954766c8c',
        client_secret:
          '3177aa7732c46d9d48c253f8dd94153f4fa7f4aaf938b061f5880d7f67d0756dc6e7beaedc11058f72d7d89a8d5542c2a1704fcb911ce600ce2763eab5b5d290',
      })
      .subscribe((res) => {
        localStorage.setItem('accessToken',res.accessToken)
      });
  }
}
