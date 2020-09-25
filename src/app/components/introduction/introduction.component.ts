import { Component, OnInit } from '@angular/core';
import * as data  from  './introduction.json';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  introductionData: any = (data as any).default;
  constructor() { }

  ngOnInit(): void {
  }

}
