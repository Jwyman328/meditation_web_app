
import { createJournalPostModel } from '../journalModels/createJournalPostModel';

export interface formatJournalPostDataModel {
    (journalEmotionChoosen: string, journalText:string): createJournalPostModel
}