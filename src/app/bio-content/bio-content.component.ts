import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio-content',
  templateUrl: './bio-content.component.html',
  styleUrls: ['./bio-content.component.css']
})
export class BioContentComponent implements OnInit {
  code_image = 'laptop.png';
  growth_image = 'growth.png';
  goals_image = 'target.png';

  constructor() { }

  ngOnInit(): void {
  }

}
