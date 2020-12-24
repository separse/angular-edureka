import { Component, OnInit } from '@angular/core';
import { StudentsDataService } from '../students-data.service';
import { StudentsType } from '../students-type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  selectedStudent!: StudentsType;
  students: Array<StudentsType> = [];
  constructor(private service: StudentsDataService) { }

  ngOnInit(): void {
    this.service.getStudent().subscribe(students => this.students = students)
  }

  onSelect (student: StudentsType): void {
    this.selectedStudent = student;
  }
}
