 interface individualJournalResponseModel {
    id:number;
    text:string;
    mood:number;
    user:number;
    date:string;
}

export type getAllPastJournalsResponseModel = individualJournalResponseModel[];