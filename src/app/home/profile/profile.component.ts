import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
profileForm: FormGroup;
  constructor(private common: CommonService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.getRestaurantProfile();
  }
  initForm() {
    this.profileForm = this.fb.group({
      _id:[null],
      heading:[null, Validators.required],
      subHeading1:[null, Validators.required],
      subHeading2:[null, Validators.required]
    })
  }
  getRestaurantProfile() {
    this.common.getRestaurantProfile().subscribe(data => {
      this.profileForm.patchValue(data);
    });
  }
  saveProfileform() {
    if (this.profileForm.valid) {
      this.common.saveRestaurantProfile(this.profileForm.value).subscribe(data => {
        this.getRestaurantProfile();
      });
    }
  }
}
