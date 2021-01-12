import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PersonDefaultService } from '../person-default.service';
import { IPerson } from '../person-interface';

@Component({
  selector: 'app-test-user',
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {
  selectedPerson: any;
  isPersonFound: boolean;
  editMode: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private defaultPerson: PersonDefaultService
  ) {}

  ngOnInit(): void {
    // this.selectedId = +this.route.snapshot.params['id'];
    // this.selectedUser = this.testUsers.find(
    //   (user) => user.id === this.selectedId
    // );
    this.route.params.subscribe((params: Params) => {
      this.selectedPerson = this.defaultPerson.defaultPersons.find(
        (person) => person.id === +params['id']
      );
      if (!this.selectedPerson) {
        this.router.navigate(['/persons']);
      } else {
        this.isPersonFound = true;
      }
    });
  }

  editPerson() {
    this.router.navigate(['./edit'], {
      relativeTo: this.route,
      queryParams: { editMode: '1', isAdmin: '1' },
      fragment: 'title',
    });
    this.editMode = true;
  }
}
