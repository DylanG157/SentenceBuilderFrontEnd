import { Injectable } from '@angular/core';
import { WordList, WordListArray } from './word-models';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class WordService {
    
    private wordList: WordList[] = [];
    constructor(private http:HttpClient) { }

    getWordList(){
        this.http.get<WordList[]>('http://localhost:3000/words/list').subscribe(res => {
            return this.wordList = res;
        })
       
    }

    setWordList(wordListFromApi: WordList[]) {
        
    }
}