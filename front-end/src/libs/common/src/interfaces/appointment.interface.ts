import { BaseResponse } from './base-response.interface';

export interface Appointment {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  people: string[];
  location: string;
  description: string;
  response?: BaseResponse;
}
