import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnInit } from "@angular/core";

@Component({
    selector: 'app-inner-view-child',
    templateUrl: './inner-view-child.component.html'
})

export class InnerViewChildComponent implements OnInit, AfterContentInit, AfterContentChecked {
    @ContentChild('par', {static: true, read: ElementRef}) par!: ElementRef;
    num: number = 0;
    plusOne() {
        this.num++;
    }
    
    ngOnInit(): void {
        console.log('oninit' + this.par.nativeElement.textContent);
    }
    ngAfterContentInit(): void {
        console.log('afterinit' + this.par.nativeElement.textContent);
    }
    ngAfterContentChecked(): void {
        console.log('aftercheked' + this.par.nativeElement.textContent);
    }
    
}