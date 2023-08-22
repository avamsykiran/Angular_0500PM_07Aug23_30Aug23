import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateNumbers(lb: number, ub: number): Observable<number> {
    let ob = new Observable<number>(
      (observer: Observer<number>) => {
        
        if(lb>ub){
          observer.error("Invalid Boundaries!");
          return;
        }

        let val = lb;

        let handler = setInterval(() => {
          observer.next(val);
          val++;
          if(val>ub){
            clearInterval(handler);
            observer.complete();
          }
        },500);
      }
    );
    return ob;
  }
}
