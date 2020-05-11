type numberResponseOption = 0 | 1 | 2 | 3 | 4

export interface emotionTextToNumberValueModel {
    (emotionText:string) : numberResponseOption
}