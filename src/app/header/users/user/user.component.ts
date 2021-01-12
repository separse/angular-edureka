import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { User } from "../user-interface";

@Component({
    selector: 'app-user',
    template: ''
})

export class UserComponent implements OnInit, OnChanges {

    private _user!: User;

    @Input() user!: User;

    counter = 0;

    ngOnInit(): void {
        console.log(this._user.name + ' ' + this.counter);
    }

    ngOnChanges(): void {
        this._user = this.user;
        this.counter++;
    }
}