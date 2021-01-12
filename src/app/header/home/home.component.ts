import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  starsWidth = [25, 46, 65, 80, 10];
  rate!: number;

  constructor(private router: Router){}
  showRate(e: number) {
    this.rate = e;
  }
  goToUsers() {
    this.router.navigate(['/users'])
  }
}
