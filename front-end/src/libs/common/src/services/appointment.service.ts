import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse, Appointment } from '../interfaces';

const BASE_URL = 'http://localhost:3001/api';
const APPOINTMENTS_BASE_URL = `${BASE_URL}/appointments`;

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private readonly _http: HttpClient) {}

  /**
   * Accepts date and returns the appointments created for the given date
   * @param date Ex: 7-24-2023
   * @returns Appointments list if exists or empty list
   */
  getAppointments(date: string): Observable<Appointment[]> {
    const url = `${APPOINTMENTS_BASE_URL}?date=${date}`;

    return this._http.get<Appointment[]>(url);
  }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    const url = `${APPOINTMENTS_BASE_URL}`;

    return this._http.post<Appointment>(url, appointment);
  }

  updateAppointment(
    appointmentId: string,
    appointment: Appointment,
  ): Observable<Appointment> {
    const url = `${APPOINTMENTS_BASE_URL}/${appointmentId}`;

    return this._http.put<Appointment>(url, appointment);
  }

  deleteAppointment(appointmentId: string): Observable<BaseResponse> {
    const url = `${APPOINTMENTS_BASE_URL}/${appointmentId}`;

    return this._http.delete<BaseResponse>(url);
  }
}
