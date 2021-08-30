import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sectionForm: FormGroup;

  constructor(private fb:FormBuilder) { }
imageUrl="https://www.logomaker.com/wp-content/uploads/2019/03/icon_only-300x297.png";

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.sectionForm=this.fb.group({
      userName:[Validators.required],
      password:[Validators.required]
    });
  }

}

