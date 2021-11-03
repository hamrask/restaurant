import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;
  @Output() customerData = new EventEmitter();
  constructor(private fb: FormBuilder, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.initForm();
  }
  
  initForm() {
    this.customerForm = this.fb.group({
      _id: [null],
      customerName: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
    });
    this.customerForm.get('mobile').valueChanges.subscribe(data => {
      if (data && data.length > 9) {
        this.searchCustomer(data);
      }
    });
  }
  saveCustomer() {
    if (this.customerForm.valid) {
      this.customerService.saveCustomer(this.customerForm.value).subscribe(data => {
        this.customerData.emit(data);
      });
    }
  }
  searchCustomer(mobile) {
    this.customerService.searchCustomer(mobile).subscribe(data => {
      if (data) {
        this.customerForm.patchValue(data);
      }
    });
  }
  goback() {
    this.customerData.emit(null);
  }
}
