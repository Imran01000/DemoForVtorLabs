import { Component, OnInit } from '@angular/core';
import * as data  from  './myskills.json';

@Component({
  selector: 'app-skills-experince',
  templateUrl: './skills-experince.component.html',
  styleUrls: ['./skills-experince.component.css']
})
export class SkillsExperinceComponent implements OnInit {
  myskills: any = (data as any).default;
  constructor() { }

  ngOnInit(): void {
    console.log(data)
  }

}
