export class SentenceArray{
    constructor(public sentence: string){}
}

export class SentenceList {
    public listOfSentences: SentenceArray[];

    constructor(listOfSentences: SentenceArray[]){
        this.listOfSentences = listOfSentences;
    }
}