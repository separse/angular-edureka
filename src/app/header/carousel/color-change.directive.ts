import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appColorChange]'
})

export class ColorChangeDirective {

    @HostBinding('style.color') color!: string
    @HostBinding('style.border-color') borderColor!: string
    @HostListener('keydown') onKeydown() {
        this.color = this.borderColor = this.colors[Math.floor(Math.random() * this.colors.length)]
    }
    colors = ['red', 'blue', 'black', 'navy', 'green', 'grey', 'brown', 'gold', 'orange', 'darkblue', 'yellow', 'pink', 'purple']

}