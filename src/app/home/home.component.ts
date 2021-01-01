import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  starsWidth = [25, 46, 65, 80, 10];
  constructor() { }

  ngOnInit(): void {
  }

}
