import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-content',
  templateUrl: './intro-content.component.html',
  styleUrls: ['./intro-content.component.css']
})
export class IntroContentComponent implements OnInit {
  profile_picture = 'profile2.jpg';
  social_linkedin = 'LinkedIn.';
  social_github = 'GitHub.';
  greeting = 'Hi, i\m Derek Vaughan.';
  subtitle = 'Software Engineer // 24 years old // Seattle Area';

  constructor() { }

  ngOnInit(): void {
  }

}
