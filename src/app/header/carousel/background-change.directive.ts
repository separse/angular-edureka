import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBackgroundChange]'
})

export class BackgroundChangeDirective {
    @Input('appBackgroundChange') backgroundColor!: string;
    constructor(public el: ElementRef, public renderer: Renderer2) { }
    @HostListener('mouseenter') changeBackgroundEnter() {
        this.renderer.setStyle(this.el.nativeElement ,'background-color', this.backgroundColor);
    }
    @HostListener('mouseleave') changeBackgroundLeave() {
        this.renderer.setStyle(this.el.nativeElement ,'background-color', 'yellow');
    }
}