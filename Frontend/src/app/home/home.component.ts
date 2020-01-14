import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  animationState = 'in';

  constructor() {
  }

  ngOnInit() {
  }
  scrollWin() {
    window.scrollBy(0, 1000);
  }
  scrollToSection(id: string) {
    if (!id) {
      return;
    }
    document.getElementById(id).scrollIntoView();


  }
}


