import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  const component = new CalendarComponent;

  it('Should have title E-calendar works',() => {
    expect(component.title).toEqual('E-calendar works');
  })
});
