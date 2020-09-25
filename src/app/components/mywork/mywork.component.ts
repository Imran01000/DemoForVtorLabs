import { Component, OnInit } from '@angular/core';
import * as data  from  './mywork.json';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyworkComponent implements OnInit {
  myWorkData: any = (data as any).default;
  constructor() { }

  ngOnInit(): void {
  }

}
