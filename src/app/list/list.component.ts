import { Component, OnInit } from '@angular/core';
import { StudentsDataService } from '../students-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: any;
  constructor(private service: StudentsDataService) { }

  ngOnInit(): void {
    this.students = this.service.getStudent();
  }

}
