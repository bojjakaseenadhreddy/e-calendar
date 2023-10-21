import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'e-calendar-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  title = 'E-calendar works'
}
