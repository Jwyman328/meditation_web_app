export function emotionNumberToTextValue(emotionNumber:number){
    switch(emotionNumber){
        case 0:
            return 'terrible';
        case 1:
            return 'bad';
        case 2:
            return 'neutral'
        case 3:
            return 'good';
        case 4:
            return 'excellent';
    }
}