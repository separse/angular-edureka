import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ICarouselContext } from './carousel-contex';

@Directive({
  selector: '[appCarousel]',
})
export class CarouselDirective implements OnInit {
  context!: ICarouselContext;
  index = 0;
  timer!: any;

  @Input('appCarouselFrom') images!: string[];
  @Input('appCarouselAutoPlay')
  set autoPlay(val: string) {
    val === 'No' ? this.stopAutoPlay() : this.runAutoPlay();
  }

  constructor(
    private templateRef: TemplateRef<ICarouselContext>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        previous: () => this.previous(),
      },
    };

    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }

  public next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.context.$implicit = this.images[this.index];
  }

  public previous() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.context.$implicit = this.images[this.index];
  }

  public runAutoPlay() {
    this.timer = setInterval(() => {
      this.next();
    }, 2000);
  }

  public stopAutoPlay() {
    clearInterval(this.timer);
  }
}
