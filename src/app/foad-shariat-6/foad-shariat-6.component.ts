import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-foad-shariat-6',
    template: `
            <h1 [hidden]="username===''" [style]="styles">Welcome {{username}}</h1>
            <h1 [hidden]="username!==''">Please enter your name</h1>
            <hr>
            <p>username: <input type="text" [(ngModel)]="username"></p>
            <p>password: <input type="password" [(ngModel)]="password"></p>
            <p>retype password: <input type="password" [(ngModel)]="retriedPassword"></p>
            <p [hidden]="password==retriedPassword">passwords dont match!</p>
            <p [hidden]="password!==retriedPassword || password===''">passwords matched</p>
    `,
    styles: [`
            h1, p {
                padding: 0 1em;
            }
        `]
})

export class FoadShariat6Component implements OnInit {
    username: string = '';
    password: any = '';
    retriedPassword: any = '';
    styles = {}
    ngOnInit(): void {
        this.styles = {
            'color': 'green',
            'font-size': '3em',
            'background': 'black'
        }
    }
} 