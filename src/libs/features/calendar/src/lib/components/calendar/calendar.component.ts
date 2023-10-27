import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Calendar,
  CalendarDataService,
  Month,
  Months,
  WEEKS,
} from '@e-calendar/common';
import * as moment from 'moment';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'e-calendar-calendar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  appTitle = 'My Calendar';

  monthNames = Object.values(Months).filter(
    (value) => typeof value === 'string',
  );
  weekNames = Object.values(WEEKS).filter((value) => typeof value === 'string');

  calendar: Calendar = new Calendar();

  constructor(private calendarDataService: CalendarDataService) {
    this.populateCalendar();
  }

  private populateCalendar() {
    this.calendar.currentMonth = this.getCurrentMonth(
      this.calendar.currentDate,
    );
    this.calendar.previousMonth = this.getPreviousMonth(
      this.calendar.currentDate,
    );
    this.calendar.nextMonth = this.getNextMonth(this.calendar.currentDate);
  }

  private getPreviousMonth(date: moment.Moment): Month {
    const previousMonth = moment(date).subtract(1, 'month');
    return {
      month: previousMonth.month(),
      displayFromDate: this.getDisplayFromDateForPreviousMonth(previousMonth),
      displayToDate: previousMonth.endOf('month').date(),
      display: this.displayPreviousMonthDates(),
    };
  }

  // Returns the start date to display from previous month
  private getDisplayFromDateForPreviousMonth(
    previousMonth: moment.Moment,
  ): number {
    return (
      previousMonth.endOf('month').date() - previousMonth.endOf('month').day()
    );
  }

  /**
   * Previous month dates hides when Current month start day is Sunday
   *
   * @returns bool
   */
  private displayPreviousMonthDates(): boolean {
    if (this.calendar.currentDate.startOf('month').day() === WEEKS.Sun) {
      return false;
    }
    return true;
  }

  private getNextMonth(date: moment.Moment): Month {
    const nextMonth = moment(date).add(1, 'month');
    return {
      month: nextMonth.month(),
      displayFromDate: nextMonth.startOf('month').date(),
      displayToDate: this.getDisplayEndDateForNextMonth(nextMonth),
      display: true,
    };
  }

  /**
   * Returns the end date to display from next month
   * If current month starts at Sun - we display remaining days of 1st week and next week(7days) in next month
   * Else we display remaining days of 1st week in next month
   *
   * @param nextMonth Moment object of next month
   * @returns end date to display in the calendar
   */
  private getDisplayEndDateForNextMonth(nextMonth: moment.Moment): number {
    if (this.calendar.currentDate.startOf('month').day() == WEEKS.Sun) {
      return 14 - nextMonth.startOf('month').day();
    } else {
      return 7 - nextMonth.startOf('month').day();
    }
  }

  private getCurrentMonth(date: moment.Moment): Month {
    return {
      month: date.month(),
      displayFromDate: date.startOf('month').date(),
      displayToDate: date.endOf('month').date(),
      display: true,
    };
  }

  public moveToNextMonth(): void {
    this.calendar = new Calendar(this.calendar.currentDate.add(1, 'month'));
    this.populateCalendar();
  }

  public moveToPreviousMonth(): void {
    this.calendar = new Calendar(
      this.calendar.currentDate.subtract(1, 'month'),
    );
    this.populateCalendar();
  }

  public onDateSelect(date: number) {
    const selectedDate = moment(
      new Date(this.calendar.year, this.calendar.currentMonth.month, date),
    );
    this.calendarDataService.setSelectedDate(selectedDate);
  }
}
