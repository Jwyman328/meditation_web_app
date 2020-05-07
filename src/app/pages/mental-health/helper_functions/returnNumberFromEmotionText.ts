export function emotionTextToNumberValue(emotionText){
    switch(emotionText){
        case 'terrible':
            return 1;
        case 'bad':
            return 2;
        case 'neutral':
            return 3
        case 'good':
            return 4;
        case 'excellent':
            return 5;
    }
}