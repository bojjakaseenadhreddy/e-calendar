export interface BaseResponse {
  statusCode?: number;
  message?: string;
  errors?: BaseError[];
}

export interface BaseError {
  message: string;
  description: string;
  code: string;
}
