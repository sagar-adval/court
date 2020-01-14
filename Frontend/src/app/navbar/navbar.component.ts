import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  elements: any = [
    {first: 'Mark'},
    {first: 'Jacob'},
    {first: 'Larry'},
  ];

  headElements = ['First'];

  constructor() { }

  ngOnInit() {
  }

}
