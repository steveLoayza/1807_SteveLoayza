import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  tests: Test[] = [];

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getTests();
  }

  getTests(): void {
    this.testService.getTests()
      .subscribe(tests => this.tests = tests.slice(1, 20));
  }
}
