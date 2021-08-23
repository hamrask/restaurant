import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'username', 'password', 'roll', 'active','action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA= [
  {position: 1, username: 'Alex', password: 'alex123',roll:'waiter', active:'yes', action:'aa'},
  
];
