import { Component, Output, EventEmitter } from "@angular/core";
import { User } from "../user-interface";

@Component({
    selector: 'app-users-form',
    templateUrl: './users-form.component.html'
})

export class UsersFormComponent {
    users: User[] = [
        {
            name: 'Russia',
            email: 'sepehr@yahoo.com',
            pass: '09180186198'
        },
        {
            name: 'Olson',
            email: 'warning@gmail.com',
            pass: '09357930901'
        },
        {
            name: 'Gooria',
            email: 'gogooli@yahoo.com',
            pass: '09123457612'
        },
        {
            name: 'Hella',
            email: 'sorus@yahoo.com',
            pass: '09378764501'
        }
    ];
    @Output() pushUser = new EventEmitter<User[]>();
    public addUser(name: string, email: string, pass: string, e: Event) {
        e.preventDefault();
        let user: User = {
            name: name,
            email: email,
            pass: pass
        }
        this.users.push(user)
        this.pushUser.emit(this.users);
    }
}