import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from '@e-calendar/calendar';
@Component({
  standalone: true,
  imports: [CalendarComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
