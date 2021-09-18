import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  roleDetails = [{roleCode: 'ADMIN',roleName: 'Admin'}, {roleCode: 'WAITER',roleName: 'Waiter'}];
  displayedColumns: string[] = ['position', 'user name', 'password', 'confirm password', 'role', 'action' ];
  constructor(private fb:FormBuilder, private userManagementService:UserManagementService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    // this.getAllRole();
    const userId = this.route.snapshot.params.userId;
    if (userId) {
      this.getUserById(userId);
    }
  }
  initForm(){
    this.userForm = this.fb.group({
      _id:[null],
      fullName:['',Validators.required],
      userName:['',Validators.required],
      password:['',Validators.required],
      phoneNumber:['',Validators.required],
      userRoleCode:['',Validators.required],
      active:[true]
   });
  }
  saveUser(){
    if(this.userForm.valid) {
      this.userManagementService.saveUser(this.userForm.value).subscribe(data =>{
        this.userForm.reset();
        this.router.navigate(["/home/user-management"]);
      })
    }
  }
  getAllRole(){
    this.userManagementService.getAllRoles().subscribe(data =>{
      this.roleDetails = data;
    });
  }
  getUserById(userId) {
    this.userManagementService.getUserById(userId).subscribe(data=>{
      data.confirmPassword = data.password;
      this.userForm.patchValue(data);
    });
  }
} 
