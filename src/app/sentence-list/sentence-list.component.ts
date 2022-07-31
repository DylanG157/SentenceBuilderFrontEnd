import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { SentenceList } from '../models/sentenceList-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sentence-list',
  templateUrl: './sentence-list.component.html',
  styleUrls: ['./sentence-list.component.css'],
})
export class SentenceListComponent implements OnInit {
  constructor(
    private dataStorageService: DataStorageService,
    private http: HttpClient
  ) {}

  listOfSentences: any = [];

  ngOnInit(): void {
    this.http
      .get<SentenceList[]>('http://localhost:3000/sentence/list')
      .subscribe((res) => {
        this.listOfSentences = res;
      });
  }
}
