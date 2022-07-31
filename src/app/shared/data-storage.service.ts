import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}

  listOfSetences: any = [];

  saveSentenceCreated(sentenceCreated: string) {
    this.http
      .post<any>(`${environment.apiUrl}/sentence/add`, {
        sentence: sentenceCreated,
      })
      .subscribe((res) => {
        return res;
      });
  }
}
