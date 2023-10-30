import { BaseResponse } from './base-response.interface';

export interface Event {
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
