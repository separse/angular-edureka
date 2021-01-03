import { Component } from "@angular/core";

@Component({
    selector: 'app-inner-view-child',
    templateUrl: './inner-view-child.component.html'
})

export class InnerViewChildComponent {
    num: number = 0;
    plusOne() {
        this.num++;
    }
}