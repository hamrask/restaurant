import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-order-home',
  templateUrl: './order-home.component.html',
  styleUrls: ['./order-home.component.scss']
})
export class OrderHomeComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  showAddressForm;
  stepperIndex = 0;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      orderType: ['', Validators.required],
      customer: [null]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  submitOrderType() {
    this.stepper.selected.completed = true;
    if (this.firstFormGroup.get('orderType').value == 'HOME_DELIVERY') {
      this.stepperIndex = 2;
    } else {
      this.stepper.steps.get(1).completed = true;
      this.stepper.steps.get(2).completed = true;
      this.stepperIndex = 3;
    }
  }
  setCustomerData(data) {
    if (data) {
      this.firstFormGroup.get('customer').setValue(data);
      this.stepper.steps.get(2).completed = true;
      this.stepperIndex = 3;
    } else {
      this.firstFormGroup.get('customer').setValue(null);
      this.stepperIndex = 1;
    }
    
  }
  loginSuccess() {
    this.stepperIndex = 1;
  }
}
