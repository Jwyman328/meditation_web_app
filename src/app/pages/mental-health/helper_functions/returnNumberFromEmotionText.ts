export function emotionTextToNumberValue(emotionText){
    switch(emotionText){
        case 'terrible':
            return 0;
        case 'bad':
            return 1;
        case 'neutral':
            return 2
        case 'good':
            return 3;
        case 'excellent':
            return 4;
    }
}