import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PersonDefaultService } from '../person-default.service';
import { IPerson } from '../person-interface';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit {
  person: any;
  constructor(
    private route: ActivatedRoute,
    private defaultPersons: PersonDefaultService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.person = this.defaultPersons.defaultPersons.find(
      (person) => person.id === +this.route.parent?.snapshot.params['id']
    );

    // this.route.params.subscribe(
    //   (params: Params) =>
    //     ( this.person = this.defaultPersons.defaultPersons.find(
    //       (person) => person.id === +params['id']
    //     ))
    // );
  }
  changeName(name: string) {
    this.person.name = name;
    this.router.navigate(['/persons']);
  }
}
