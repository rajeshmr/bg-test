import { Injectable, Injector, KeyValueDiffers } from '@angular/core';
import * as Bull from 'bull';

export abstract class Report {
  abstract get(): any;
  abstract process(): void;
}

export class FooReport implements Report {
  get() {
    return Promise.resolve(['foo']);
  }
  process() {
    this.get().then(res => console.log(res));
  }
}

export class BarReport implements Report {
  get() {
    return Promise.resolve(['bar']);
  }
  process() {
    this.get().then(res => console.log(res));
  }
}

@Injectable({
  providedIn: 'root'
})
export default class ReckonBgService {
  static mapping: { [key: string]: typeof Report} = {'foo': FooReport, 'bar': BarReport};

  injector = Injector.create({providers: [
    {provide: FooReport, deps: []},
    {provide: BarReport, deps: []}
  ]});

  queue = null;
  constructor() {
    this.queue = Bull('reports');
  }

  getReport(name: string) {
    console.log(name);
    const reportType = ReckonBgService.mapping[name];
    const report = this.injector.get(reportType);

    report.process();
    // this.queue.process(function(job, done) {
    //   report.process();
    //   done();
    // });
  }
}