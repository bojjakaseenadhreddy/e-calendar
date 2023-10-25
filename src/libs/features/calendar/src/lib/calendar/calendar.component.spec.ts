/* eslint-disable max-lines-per-function */
import { Calendar, Months } from '@e-calendar/common';
import { CalendarComponent } from './calendar.component';
import moment = require('moment');

describe('#validate - CalendarComponent', () => {
  const component = new CalendarComponent();

  it('Should have - title My Calendar', () => {
    expect(component.appTitle).toEqual('My Calendar');
  });

  describe('#Validate - month names (3 letter)', () => {
    it.each([
      ['Jan', 0],
      ['Feb', 1],
      ['Mar', 2],
      ['Apr', 3],
      ['May', 4],
      ['Jun', 5],
      ['Jul', 6],
      ['Aug', 7],
      ['Sep', 8],
      ['Oct', 9],
      ['Nov', 10],
      ['Dec', 11],
    ])(' %s Should have - index %i', (month, index) => {
      expect(component.monthNames[index]).toBe(month);
    });
  });

  describe('#validate - week names (3 letter)', () => {
    it.each([
      ['Sun', 0],
      ['Mon', 1],
      ['Tue', 2],
      ['Wed', 3],
      ['Thu', 4],
      ['Fri', 5],
      ['Sat', 6],
    ])('%s Should have - index %i', (week, index) => {
      expect(component.weekNames[index]).toEqual(week);
    });
  });

  describe('#validate - clicks moveToNextMonth() when on Saturday Dec-31-2022', () => {
    beforeAll(() => {
      component.calendar = new Calendar(moment(new Date(2022, Months.Dec, 31)));
      component.moveToNextMonth();
    });

    it('Should update - the year from 2022 to 2023 ', () => {
      expect(component.calendar.year).toEqual(2023);
    });
  });

  describe('#validate - clicks moveToNextMonth() when on Tuesday Oct-24-2023', () => {
    beforeAll(() => {
      component.calendar = new Calendar(moment(new Date(2023, Months.Oct, 24)));
      component.moveToNextMonth();
    });

    it('Should have - the year 2023', () => {
      expect(component.calendar.year).toEqual(2023);
    });

    describe('#validate - current month', () => {
      it('Should update - current month from Oct to Nov', () => {
        expect(component.calendar.currentMonth.month).toEqual(Months.Nov);
      });

      it('Should have - displayFromDate as 1st', () => {
        expect(component.calendar.currentMonth.displayFromDate).toEqual(1);
      });

      it('Should have - displayToDate as 30th', () => {
        expect(component.calendar.currentMonth.displayToDate).toEqual(30);
      });

      it('Should have - display as true', () => {
        expect(component.calendar.currentMonth.display).toEqual(true);
      });
    });

    describe('#validate - previous month', () => {
      it('Should have - previous month as October', () => {
        expect(component.calendar.previousMonth.month).toEqual(Months.Oct);
      });

      it('Should have - displayFromDate as 29th', () => {
        expect(component.calendar.previousMonth.displayFromDate).toEqual(29);
      });

      it('Should have - displayToDate as 31st', () => {
        expect(component.calendar.previousMonth.displayToDate).toEqual(31);
      });

      it('Should have - display as true', () => {
        expect(component.calendar.previousMonth.display).toEqual(true);
      });
    });

    describe('#validate - next month', () => {
      it('Should have - next month as December', () => {
        expect(component.calendar.nextMonth.month).toEqual(Months.Dec);
      });

      it('Should have - displayFromDate as 1st', () => {
        expect(component.calendar.nextMonth.displayFromDate).toEqual(1);
      });

      it('Should have - displayToDate as 2nd', () => {
        expect(component.calendar.nextMonth.displayToDate).toEqual(2);
      });

      it('Should have - display as true', () => {
        expect(component.calendar.nextMonth.display).toEqual(true);
      });
    });
  });

  describe('#validate - clicks moveToPreviousMonth() when on Sunday Jan-01-2023', () => {
    beforeAll(() => {
      component.calendar = new Calendar(moment(new Date(2023, Months.Jan, 1)));
      component.moveToPreviousMonth();
    });

    it('Should update - the year from 2023 to 2022 ', () => {
      expect(component.calendar.year).toEqual(2022);
    });
  });

  describe('#validate - clicks moveToPreviousMonth() when on Tuesday Nov-24-2023', () => {
    beforeAll(() => {
      component.calendar = new Calendar(moment(new Date(2023, Months.Nov, 24)));
      component.moveToPreviousMonth();
    });

    it('Should have - the year 2023', () => {
      expect(component.calendar.year).toEqual(2023);
    });

    describe('#validate current month', () => {
      it('Should update - current month from Nov to Oct', () => {
        expect(component.calendar.currentMonth.month).toEqual(Months.Oct);
      });

      it('Should have - displayFromDate as 1st', () => {
        expect(component.calendar.currentMonth.displayFromDate).toEqual(1);
      });

      it('Should have - displayToDate as 31st', () => {
        expect(component.calendar.currentMonth.displayToDate).toEqual(31);
      });

      it('Should have - display as true', () => {
        expect(component.calendar.currentMonth.display).toEqual(true);
      });
    });

    describe('#validate - previous month', () => {
      it('Should have - previous month as September', () => {
        expect(component.calendar.previousMonth.month).toEqual(Months.Sep);
      });

      it('Should have - display as false', () => {
        expect(component.calendar.previousMonth.display).toEqual(false);
      });
    });

    describe('#validate - next month', () => {
      it('Should have - next month as Nov', () => {
        expect(component.calendar.nextMonth.month).toEqual(Months.Nov);
      });

      it('Should have - displayFromDate as 1st', () => {
        expect(component.calendar.nextMonth.displayFromDate).toEqual(1);
      });

      it('Should have - displayToDate as th', () => {
        expect(component.calendar.nextMonth.displayToDate).toEqual(11);
      });

      it('Should have - display as true', () => {
        expect(component.calendar.nextMonth.display).toEqual(true);
      });
    });
  });
});
