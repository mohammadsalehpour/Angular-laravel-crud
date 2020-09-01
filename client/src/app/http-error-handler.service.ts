import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
// import { type } from 'os';

export type HandlerError = <T>(
  operation?: string,
  result?: T
) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()

export class HttpErrorHandler {
  constructor(private messageService: MessageService) {}

  createHandlerError = (serviceName = '') => <T> (
    operation = 'operation',
    result = {} as T
  ) => this.handlerError(serviceName, operation, result)

  handlerError<T>(serviceName = '', operation = '', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);

      const message = error.error instanceof ErrorEvent ? error.error.message : `server returned code ${error.status} with body "${error.error}"`;

      this.messageService.add(
        `${serviceName}: ${operation} failed: ${message}`
      );

      return of(result);
    };
  }




}
