import { Component, OnInit } from '@angular/core';
import { UserManagementService } from 'src/app/shared/services/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['position', 'username', 'password', 'roll', 'active','action'];
  userDetails = [];
  constructor(private user: UserManagementService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.user.getAllUser().subscribe(data => {
     this.userDetails = data;
    });
  }
}