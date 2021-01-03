import { Component, Input } from "@angular/core";
import { User } from "../user-interface";

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html'
})

export class UsersTableComponent {
    @Input() users!: User[];
    editMode = false;
    public showEdit() {
        this.editMode == true;
        console.log('true');
        
    }
}