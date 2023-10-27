import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarDataService {
  private _selectedDate = new Subject<moment.Moment>();

  setSelectedDate(selectedDate: moment.Moment) {
    this._selectedDate.next(selectedDate);
  }

  get selectedDate(): Observable<moment.Moment> {
    return this._selectedDate.asObservable();
  }
}
