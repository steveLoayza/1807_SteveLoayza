import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-search',
  templateUrl: './test-search.component.html',
  styleUrls: [ './test-search.component.css' ]
})
export class TestSearchComponent implements OnInit {
  tests$: Observable<Test[]>;
  private searchTerms = new Subject<string>();

  constructor(private testService: TestService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.tests$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.testService.searchTests(term)),
    );
  }
}
