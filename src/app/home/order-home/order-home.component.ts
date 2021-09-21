import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { OrderService } from 'src/app/shared/services/order.service';
import { WaiterOrderComponent } from '../waiter-order/waiter-order.component';

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
  orderForm: FormGroup;
  @ViewChild(WaiterOrderComponent) order: WaiterOrderComponent;
  constructor(private _formBuilder: FormBuilder, private orderService: OrderService) {}

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
    this.order.orderForm.get('orderType').patchValue(this.firstFormGroup.get('orderType').value);
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
      this.order.orderForm.get('customer').patchValue(data);
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
