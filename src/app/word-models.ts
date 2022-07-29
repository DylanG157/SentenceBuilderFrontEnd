export class WordListArray{
    constructor(public wordType: string) {}
}
  
export class WordList {
    public wordType: string;
    public FullWordList: WordListArray[];
  
    constructor(wordType: string, FullWordList: WordListArray[]){
        this.wordType  = wordType;
        this.FullWordList = FullWordList;
    }
}


