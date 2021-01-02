import { Component, Input, OnInit } from '@angular/core';
import { StudentsType } from '../../../students-type';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
@Input() selectedStudent!: StudentsType;
  constructor() { }

  ngOnInit(): void {
  }

}
