import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  constructor(private popup: MatDialogRef<AddCustomerComponent>) { }

  ngOnInit(): void {
  }
  closePopup() {
    this.popup.close();
  }
}
