import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagementService } from 'src/app/shared/services/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['position', 'username', 'password', 'role', 'active','action'];
  userDetails = [];
  filteredUser = [];
  searchText = new FormControl('');
  constructor(private user: UserManagementService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.searchText.valueChanges.subscribe(data => {
      this.filterUsers(data);
    });
  }
  filterUsers(name) {
    this.filteredUser = this.userDetails.filter(x => x.userName.toLowerCase().includes(name.toLowerCase()));
  }
  getAllUsers() {
    this.user.getAllUser().subscribe(data => {
     this.userDetails = data;
     this.filteredUser = data;
    });
  }
  deleteUser(userId){
    this.user.deleteUserById(userId).subscribe(data =>{
      this.getAllUsers();
    });
  }
  editUser(userDetails){
    this.router.navigate(['/home/add-user', userDetails._id]);
  }
}
