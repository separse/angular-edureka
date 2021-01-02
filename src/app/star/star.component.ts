import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent {
    @Input() starsWidth!: number;
    @Output() rate = new EventEmitter<number>();
    showRate() {
        this.rate.emit(this.starsWidth / 90 * 5);
    }
}