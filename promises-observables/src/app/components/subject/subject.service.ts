import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private readonly valueChanged$ = new Subject<number>();
  // readonly valueChanged$ = new BehaviorSubject<number>(1);

  valueChanged(): Observable<number> {
    return this.valueChanged$.asObservable();
  }

  emitValue(num: number) {
    this.valueChanged$.next(num);
  }
}
