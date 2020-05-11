interface individualEmotionData {
    moods_range: [
        number[],
        number[],
        string[]
    ]
}

export type emotionDataResponseModel = individualEmotionData[]