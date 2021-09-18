import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb:FormBuilder, private auth: UserManagementService, private router: Router, private toaster: ToastrService) { }
imageUrl="https://www.logomaker.com/wp-content/uploads/2019/03/icon_only-300x297.png";

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.userForm=this.fb.group({
      userName:['',Validators.required],
      password:['', Validators.required]
    });
  }

  login() {
    if (this.userForm.valid) {
      this.auth.login(this.userForm.value).subscribe(data => {
        if (data.role == 'ADMIN') {
          this.toaster.success('Login Success', 'Success');
          this.auth.setAuthToken(data.token);
          this.router.navigate(['/home']);
        } else {
          this.toaster.show('Feature pending', 'Psst');
        }
      }, error => {
        this.toaster.error(error.error.message, 'Error');
      });
    }
  }

}

