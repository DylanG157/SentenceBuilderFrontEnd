import { Injectable } from '@angular/core';
import { WordList, WordListArray } from './word-models';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable()
export class WordService {
    
    private wordList: WordList[] = [];
    constructor(private http:HttpClient) { }

    getWordList(){
        this.http.get<WordList[]>(`${environment.apiUrl}/words/list`).subscribe(res => {
            return this.wordList = res;
        })
       
    }
}