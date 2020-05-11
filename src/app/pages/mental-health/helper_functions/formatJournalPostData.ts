
import { createTodaysFormatedDate } from './createTodaysFormatedDate';
import { emotionTextToNumberValue } from './returnNumberFromEmotionText';
/**
 * Create the correct format for the post body data to create a journal.
 * 
 * @param journalEmotionChoosen Choosen emotional text state of the user.
 * @param journalText           Journal entry text.
 */
export function formatJournalPostData(journalEmotionChoosen: string, journalText:string){
    const formatedDate = createTodaysFormatedDate()
    let emotionNumberValue = emotionTextToNumberValue(journalEmotionChoosen)
    const journalPostData = {date:formatedDate,text:journalText, mood:emotionNumberValue}
    return journalPostData

}