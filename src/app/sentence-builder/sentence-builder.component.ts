import { Component, OnInit, Injectable } from '@angular/core';
import { WordList } from '../models/word-models';
import { HttpClient } from '@angular/common/http';
import { DataStorageService } from '../shared/data-storage.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';
import { SentenceListComponent } from '../sentence-list/sentence-list.component'

@Component({
  selector: 'app-sentence-builder',
  templateUrl: './sentence-builder.component.html',
  styleUrls: ['./sentence-builder.component.css'],
})
export class SentenceBuilderComponent implements OnInit {
  title = 'SentenceBuilder';
  wordList: WordList[] = [];

  constructor(
    private http: HttpClient,
    private dataStorageService: DataStorageService,
    private modalService: NgbModal,
    private sentenceListComponent : SentenceListComponent
  ) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  //This will store the users current sentence they are buidling
  usersSentence = '';
  //List of words the user can select from
  listOfWords: any = [];

  form = new FormGroup({
    wordTypeControl: new FormControl(),
    listOfWordTypeControl: new FormControl(),
  });

  ngOnInit() {
    this.http
      .get<WordList[]>(`${environment.apiUrl}/words/list`)
      .subscribe((res) => {
        this.wordList = res;
      });
  }

  wordSelected(wordSelected: Event) {
    const selectedDropDownListValue = (<HTMLInputElement>wordSelected.target)
      .value;
    this.usersSentence += selectedDropDownListValue + ' ';
  }

  saveSentence() {
    //Used to call the backend API to save the sentence
    this.dataStorageService.saveSentenceCreated(this.usersSentence);

    //Used to clear, so the user can start building a new sentence
    this.usersSentence = '';
    this.listOfWords = [];
    this.form.controls.wordTypeControl.reset();
    this.form.controls.listOfWordTypeControl.reset();
    this.sentenceListComponent.getSentenceList();
  }

  checkWordTypeDropDown(event: Event) {
    //Word type selection made by the user
    const selectedDropDownListValue = (<HTMLInputElement>event.target).value;

    //Used to retrieve the list of words for that particular word type
    this.listOfWords = this.wordList.filter(
      (c) => c.wordType === selectedDropDownListValue
    );
    this.listOfWords = this.listOfWords[0].FullWordList;
  }

  clearSentence() {
    //Used to reset the data so the user can build a new sentence
    this.usersSentence = '';
    this.listOfWords = [];
    this.form.controls.wordTypeControl.reset();
    this.form.controls.listOfWordTypeControl.reset();
  }
}
