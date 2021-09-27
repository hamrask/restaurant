import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserManagementService } from 'src/app/shared/services/user-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  @Output() loginChange = new EventEmitter();
  @ViewChild('form') form: NgForm;
  constructor(private fb:FormBuilder, private auth: UserManagementService, private router: Router, private toaster: ToastrService) { }
  imageUrl="https://www.logomaker.com/wp-content/uploads/2019/03/icon_only-300x297.png";
  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.userForm=this.fb.group({
      password:['', Validators.required]
    });
  }

  login() {
    if (this.userForm.valid) {
      this.auth.login(this.userForm.value).subscribe(data => {
          this.toaster.success('Login Success', 'Success');
          this.auth.setAuthToken(data.token);
          this.loginChange.emit(true);
      }, error => {
        this.toaster.error(error.error.message, 'Error');
      });
    }
  }
}

