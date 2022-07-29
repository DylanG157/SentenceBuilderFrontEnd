import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient) {};

    saveSentenceCreated(sentenceCreated : string){
        this.http.post<any>('http://localhost:3000/sentence/add',{ sentence : sentenceCreated}).subscribe(res => {
         return res
     })
    }

}

