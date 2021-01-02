import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  starsWidth = [25, 46, 65, 80, 10];
  rate!: number;
  showRate(e: number) {
    this.rate = e;
  }
}
