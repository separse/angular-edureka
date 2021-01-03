import { Component, Output, EventEmitter } from "@angular/core";
import { User } from "../user-interface";

@Component({
    selector: 'app-users-form',
    templateUrl: './users-form.component.html'
})

export class UsersFormComponent {
    user!: User;
    @Output() pushUser = new EventEmitter<User>();
    public addUser(name: string, email: string, pass: string, e: Event) {
        e.preventDefault();
        this.user = {
            name: name,
            email: email,
            pass: pass
        }
        this.pushUser.emit(this.user);
    }
}