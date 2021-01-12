import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ITestUser } from './test-user-interface';

@Component({
  selector: 'app-test-user',
  templateUrl: './test-user.component.html',
})
export class TestUserComponent implements OnInit {
  testUsers: ITestUser[] = [
    {
      id: 1,
      name: 'sahar',
    },
    {
      id: 2,
      name: 'soheila',
    },
    {
      id: 3,
      name: 'somaye',
    },
    {
      id: 4,
      name: 'sahand',
    },
  ];
  selectedId!: number;
  selectedUser?: ITestUser;
  isUserFound = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.selectedId = +this.route.snapshot.params['id'];
    // this.selectedUser = this.testUsers.find(
    //   (user) => user.id === this.selectedId
    // );
    this.route.params.subscribe((params: Params) => {
      this.selectedUser = this.testUsers.find(
        (user) => user.id === +params['id']
      );
      if (!this.selectedUser) {
        this.isUserFound = false;
      }
    });
  }
}
