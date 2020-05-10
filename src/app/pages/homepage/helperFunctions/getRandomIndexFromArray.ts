
import { meditationCourseModel } from '../../../models/meditation-models/meditation-courseModel';

export function getRandomIndexFromArray(arrayToGetRandomFrom:any[]){
    const min = Math.ceil(0);
    const max = Math.floor(arrayToGetRandomFrom.length - 1);
    const randomCourseNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randomCourseNumber
}