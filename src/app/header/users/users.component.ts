import { Component } from "@angular/core";
import { User } from "./user-interface";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent {
    users!: User[];
    pushUser(users: User[]) {
        this.users = users;
    }
}