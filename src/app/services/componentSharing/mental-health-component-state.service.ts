import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentalHealthComponentStateService {
  choosenEmotion = new BehaviorSubject('neutral') ;
  journalText = new BehaviorSubject('');

  constructor() { }
}
