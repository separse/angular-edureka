import { Component } from "@angular/core";
import { User } from "./user-interface";

@Component({
    selector: 'app-users',
    template: `
        <app-user [user]="user1"></app-user>
        <app-users-form (pushUser)="pushUser($event)"></app-users-form>
        <app-users-table [users]="users"></app-users-table>
    `
})
export class UsersComponent {
    user1: User =
        {
            name: 'Rudil',
            email: 'sepehrar@yahoo.com',
            pass: '09180189098'
        };

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

    pushUser(user: User) {
        this.users.push(user);
    }
}