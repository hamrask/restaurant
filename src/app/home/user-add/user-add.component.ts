import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserManagementService } from 'src/app/shared/services/user-management.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})        
export class UserAddComponent implements OnInit {
  title = 'Add User'
  userForm: FormGroup;
  userDetails =[];
  displayedColumns: string[] = ['position', 'user name', 'password', 'role', 'action' ];
  constructor(private fb:FormBuilder, private userManagementService:UserManagementService) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllUsers();
  }
  initForm(){
    this.userForm = this.fb.group({
      _id:[null],
      userName:['',Validators.required]
    });
  }
  saveUser(){
    if(this.userForm.valid) {
      this.userManagementService.saveUser(this.userForm.value).subscribe(data =>{
        this.getAllUsers();
        this.userForm.reset();
      })
    }
  }
  getAllUsers(){
    this.userManagementService.getAllUser().subscribe(data =>{
      this.userDetails = data; 
    });
  }
  deleteUser(userId) {
    this.userManagementService.deleteUserById(userId).subscribe(data =>{
      this.getAllUsers();
    });
  }
} 
