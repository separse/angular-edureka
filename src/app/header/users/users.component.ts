import { Component } from "@angular/core";
import { User } from "./user-interface";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})

export class UsersComponent {
    user1: User =
        {
            name: 'Rudil',
            email: 'sepehrar@yahoo.com',
            pass: '09180189098'
        };
    users1 = [
        {
            name: 'Russia',
            email: 'sepehr@yahoo.com',
            pass: 34
        },
        {
            name: 'Olson',
            email: 'warning@gmail.com',
            pass: 24
        },
        {
            name: 'Gooria',
            email: 'gogooli@yahoo.com',
            pass: 44
        },
        {
            name: 'Hella',
            email: 'sorus@yahoo.com',
            pass: 11
        }
    ];

    users: User[] = [
        {
            name: 'Russia',
            email: 'sepehr@yahoo.com',
            pass: '34'
        },
        {
            name: 'Olson',
            email: 'warning@gmail.com',
            pass: '24'
        },
        {
            name: 'Gooria',
            email: 'gogooli@yahoo.com',
            pass: '44'
        },
        {
            name: 'Hella',
            email: 'sorus@yahoo.com',
            pass: '11'
        }
    ];

    pushUser(user: User) {
        this.users.push(user);
    }
}