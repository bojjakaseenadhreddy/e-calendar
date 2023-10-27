import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDataService, Event } from '@e-calendar/common';
import * as moment from 'moment';

@Component({
  selector: 'e-calendar-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {
  @Input() events!: Event[];
  @Input() selectedDate = moment();

  date!: number;
  month!: string;
  day!: string;

  constructor(private calendarDataService: CalendarDataService) {
    this.getSelectedDate();
    this.prepareDisplayDataFromSelectedData();
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
