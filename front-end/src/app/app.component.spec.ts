import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const component = new AppComponent();

  it(`should have as title 'E-calendar'`, () => {
    expect(component.title).toEqual('E-calendar');
  });
});
