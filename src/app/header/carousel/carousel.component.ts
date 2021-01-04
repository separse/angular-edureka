import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  backgroundColor = 'red';
  images = [
    '/assets/Join-Leaders-Alt1.jpg',
    '/assets/Join-Leaders-Alt5.jpg',
    '/assets/Join-Leaders-Alt3.jpg',
    '/assets/Join-Leaders-Alt4.jpg',
  ];
}
