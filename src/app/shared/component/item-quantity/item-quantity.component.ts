import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.scss']
})
export class ItemQuantityComponent implements OnInit {
  itemForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialogRef<ItemQuantityComponent>, private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      _id: [null],
      itemName: [''],
      amount: [''],
      quantity: [1, Validators.required]
    });
    this.itemForm.patchValue(this.data);
  }

  addNumber(number) {
    let currentValue = this.itemForm.get('quantity').value;
    if (!Number(currentValue)) {
      currentValue = '';
    }
    if (number == 'Clear' && currentValue > 0) {
      let output = currentValue.toString().substr(0, currentValue.toString().length - 1);
      this.itemForm.get('quantity').setValue(output);
    }
    if (Number(number)) {
      let output = currentValue.toString() + number;
      this.itemForm.get('quantity').setValue(output);
    }
  }
  closePopup() {
    this.dialog.close();
  }
  saveItem() {
    if (this.itemForm.valid) {
      this.dialog.close(this.itemForm.value);
    }
  }
}
