import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudentsType } from './students-type';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {
  students: Array<StudentsType> = [
    {
      id: 1,
      name: "Ali",
      city: "LA",
      email: "ali@yahoo.com"
    },
    {
      id: 2,
      name: "Gholi",
      city: "NY",
      email: "gholi@yahoo.com"
    }, {
      id: 3,
      name: "Zhiva",
      city: "Gothom",
      email: "zhigot@yahoo.com"
    }, {
      id: 4,
      name: "Hilda",
      city: "Nevada",
      email: "nevhil@yahoo.com"
    },
  ]

  constructor() { }
  getStudent(): Observable<StudentsType[]> {
    return of (this.students);
  }
}
