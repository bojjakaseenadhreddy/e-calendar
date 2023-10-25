import * as moment from 'moment';
import { Month } from '../interfaces';

export class Calendar {
  constructor(date: moment.Moment = moment()) {
    this.year = date.year();
    this.currentDate = date;
  }

  year: number;
  currentDate: moment.Moment;
  currentMonth!: Month;
  nextMonth!: Month;
  previousMonth!: Month;
}
