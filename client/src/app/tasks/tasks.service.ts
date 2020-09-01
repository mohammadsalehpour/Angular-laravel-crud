import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Task } from './task';
import { HttpErrorHandler, HandlerError } from '../http-error-handler.service';

@Injectable()
export class TasksService {
  private handlerError: HandlerError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandlerError('TasksService');
  }

  getTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>('http://localhost:8000/api/task')
      .pipe(catchError(this.handlerError('getTasks', [])));
  }

  addTask(task: Task): Observable<Task> {
    return this.http
      .post<Task>('http://localhost:8000/api/task', task)
      .pipe(catchError(this.handlerError('addTask', task)));
  }

  deleteTask(id: number): Observable<{}> {
    const url = `http://localhost:8000/api/task/${id}`;
    return this.http
      .delete(url)
      .pipe(catchError(this.handlerError('deleteTask')));
  }

  updateTask(task: Task): Observable<Task> {
    return this.http
      .put<Task>(`http://localhost:8000/api/task/${task.id}`, task)
      .pipe(catchError(this.handlerError('updateTask', task)));
  }

}
