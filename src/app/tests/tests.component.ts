import { Component, OnInit } from '@angular/core';

import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  tests: Test[];

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getTests();
  }

  getTests(): void {
    this.testService.getTests()
    .subscribe(tests => this.tests = tests);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.testService.addTest({ name } as Test)
      .subscribe(test => {
        this.tests.push(test);
      });
  }

  delete(test: Test): void {
    this.tests = this.tests.filter(h => h !== test);
    this.testService.deleteTest(test).subscribe();
  }

}
