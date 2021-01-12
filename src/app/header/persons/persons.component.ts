import { Component, OnInit } from '@angular/core';
import { PersonDefaultService } from './person-default.service';
import { IPerson } from './person-interface';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  persons!: IPerson[];
  constructor(private personDefault: PersonDefaultService) {}
  ngOnInit(): void {
    this.persons = this.personDefault.defaultPersons;
  }
}
