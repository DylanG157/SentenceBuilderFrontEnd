import { Component, OnInit, Injectable } from '@angular/core';
import { SentenceList } from '../models/sentenceList-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-sentence-list',
  templateUrl: './sentence-list.component.html',
  styleUrls: ['./sentence-list.component.css'],
})
export class SentenceListComponent implements OnInit {
  constructor(private http: HttpClient) {}

  listOfSentences: any = [];

  ngOnInit(): void {
    this.getSentenceList()
  }

  public getSentenceList() {
    this.http
      .get<SentenceList[]>(`${environment.apiUrl}/sentence/list`)
      .subscribe((res) => {
        this.listOfSentences = res;
        this.listOfSentences = this.listOfSentences[0].reverse()
        this.listOfSentences = this.listOfSentences.slice(0,7)
      });
  }
}
