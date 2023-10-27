import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse, Event } from '../interfaces';

const BASE_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private readonly _http: HttpClient) {}

  /**
   * Accepts date and returns the events created for the given date
   * @param date Ex: 7-24-2023
   * @returns Events list if exists or empty list
   */
  getEvents(date: string): Observable<Event[]> {
    const url = `${BASE_URL}/events?date=${date}`;

    return this._http.get<Event[]>(url);
  }

  addEvent(event: Event): Observable<Event> {
    const url = `${BASE_URL}/events`;

    return this._http.post<Event>(url, event);
  }

  updateEvent(eventId: string, event: Event): Observable<Event> {
    const url = `${BASE_URL}/events?id=?${eventId}`;

    return this._http.put<Event>(url, event);
  }

  deleteEvent(eventId: string): Observable<BaseResponse> {
    const url = `${BASE_URL}/events?id=${eventId}`;

    return this._http.delete<BaseResponse>(url);
  }
}
