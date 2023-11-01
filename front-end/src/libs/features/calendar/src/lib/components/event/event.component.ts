import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CalendarDataService,
  Appointment,
  AppointmentService,
} from '@e-calendar/common';
import * as moment from 'moment';

@Component({
  selector: 'e-calendar-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {
  appointments!: Appointment[];
  selectedDate = moment();

  date!: number;
  month!: string;
  day!: string;

  constructor(
    private readonly calendarDataService: CalendarDataService,
    private readonly appointmentsService: AppointmentService,
  ) {
    this.getSelectedDate();
    this.getAppointments();
    this.prepareDisplayDataFromSelectedData();
  }

  private getAppointments(): void {
    this.appointmentsService.getAppointments('2002-12-12').subscribe(
      (appointments) => {
        this.appointments = appointments;
      },
      () => {
        throw new Error('Unable to fetch appointments');
      },
    );
  }

  private getSelectedDate(): void {
    this.calendarDataService.selectedDate.subscribe((selectedDate) => {
      this.selectedDate = selectedDate;
      this.prepareDisplayDataFromSelectedData();
    });
  }

  private prepareDisplayDataFromSelectedData(): void {
    if (this.selectedDate) {
      this.date = this.selectedDate.date();
      this.month = moment(this.selectedDate.month(), 'M').format('MMMM');
      this.day = moment(this.selectedDate.day(), 'D').format('dddd');
    }
  }
}
