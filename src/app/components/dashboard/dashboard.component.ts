import { Component, OnInit } from '@angular/core';
import * as data  from  './home.json';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  homeData: any = (data as any).default;
  constructor()
   { 
  
   }
 

  ngOnInit(): void {
    console.log(data);
  }
  
}
