import { Injectable } from '@angular/core';
import { IPerson } from './person-interface';

@Injectable({
  providedIn: 'root',
})
export class PersonDefaultService {
  defaultPersons: IPerson[] = [
    { id: 1, name: 'goli' },
    { id: 2, name: 'lori' },
    { id: 3, name: 'soli' },
    { id: 4, name: 'golam' },
  ];
}
