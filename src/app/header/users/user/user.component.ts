import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { User } from "../user-interface";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit, OnChanges {

    private _user!: User;

    @Input() user!: User;

    // @Input() set user(user: User) {
    //     this._user = user;
    //     this.counter++;
    // }

    // get user(): User {
    //     return this._user;
    // }


    counter = 0;

    ngOnInit(): void {
        console.log(this._user.name + ' ' + this.counter);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this._user = this.user;
        this.counter++;
    }
}