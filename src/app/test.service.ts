import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Test } from './test';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class TestService {

  private testUrl = 'api/tests';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getTests (): Observable<Test[]> {
    return this.http.get<Test[]>(this.testUrl)
      .pipe(
        tap(tests => this.log('fetched tests')),
        catchError(this.handleError('getTests', []))
      );
  }

  getTestNo404<Data>(id: number): Observable<Test> {
    const url = `${this.testUrl}/?id=${id}`;
    return this.http.get<Test[]>(url)
      .pipe(
        map(test => test[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} test id=${id}`);
        }),
        catchError(this.handleError<Test>(`getTest id=${id}`))
      );
  }

  getTest(id: number): Observable<Test> {
    const url = `${this.testUrl}/${id}`;
    return this.http.get<Test>(url).pipe(
      tap(_ => this.log(`fetched test id=${id}`)),
      catchError(this.handleError<Test>(`getTest id=${id}`))
    );
  }

  searchTests(term: string): Observable<Test[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Test[]>(`${this.testUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found tests matching "${term}"`)),
      catchError(this.handleError<Test[]>('searchTests', []))
    );
  }

  //////// Save methods //////////

  addTest (test: Test): Observable<Test> {
    return this.http.post<Test>(this.testUrl, test, httpOptions).pipe(
      tap((test: Test) => this.log(`added test w/ id=${test.id}`)),
      catchError(this.handleError<Test>('addTest'))
    );
  }

  deleteTest (test: Test | number): Observable<Test> {
    const id = typeof test === 'number' ? test : test.id;
    const url = `${this.testUrl}/${id}`;

    return this.http.delete<Test>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted test id=${id}`)),
      catchError(this.handleError<Test>('deleteTest'))
    );
  }

  updateTest (test: Test): Observable<any> {
    return this.http.put(this.testUrl, test, httpOptions).pipe(
      tap(_ => this.log(`updated test id=${test.id}`)),
      catchError(this.handleError<any>('updateTest'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`TestService: ${message}`);
  }
}
