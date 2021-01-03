import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren, ViewEncapsulation } from "@angular/core";
import { InnerViewChildComponent } from "./inner-view-child/inner-view-child.component";

@Component({
    selector: 'app-view-child',
    templateUrl: './view-child.component.html',
    styles: [`
        p {
            color: red;
            margin: 0 3em;
        }
        button {
            margin: 0 3em;
        }
    `],
    encapsulation: ViewEncapsulation.None
})

export class ViewChildComponent implements  OnInit {

    // @ViewChild(InnerViewChildComponent, { static: true, read: InnerViewChildComponent }) innerChild!: InnerViewChildComponent;
    // @ViewChild('num2', { static: true, read: ElementRef }) num2!: ElementRef;
    @ViewChild('par', {static: true, read: ElementRef}) par!: ElementRef;
    // @ViewChild('num2', {static: true}) num2!: ElementRef; المنت رف را از اینجا تغییر ندهیم فقط میتوانیم بخانیم
    @ViewChildren(InnerViewChildComponent, { read: InnerViewChildComponent }) innerChildren!: QueryList<InnerViewChildComponent>;

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
        this.renderer.setStyle(this.par.nativeElement, 'background', 'blue');
        // this.num2.nativeElement.innerHTML = 'efwfw';
        // this.renderer.setStyle(this.num2.nativeElement, 'color', 'blue');
        // this.innerChild.num = 10;
    }
    // تا وقتی که میشود از افتر استفاده شود
    // ngAfterViewInit(): void { 
    //     this.num2.nativeElement.innerHTML = 'efwfw';
    // }

    // ngAfterViewInit(): void {
    //   this.innerChildren.forEach((comp) => comp.plusOne());
    // }

    public changePar () {
        this.par.nativeElement.textContent = 'googooli';
    }
}