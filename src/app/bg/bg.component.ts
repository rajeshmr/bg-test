import { Component, OnInit } from '@angular/core';
import ReckonBgService from './reckon-bg-service';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.css']
})
export class BgComponent implements OnInit {

  constructor(public reckon: ReckonBgService) {}

  ngOnInit() {
  }

  test(name: string) {
    this.reckon.getReport(name);
  }

}