import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItemService } from '../../shared/services/item.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss'],
})
export class UpdateStockComponent implements OnInit {
  stockForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<UpdateStockComponent>,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
    if (this.data) {
      this.stockForm.patchValue(this.data);
    }
    }
  initForm() {
    this.stockForm = this.fb.group({
      itemName: ['', Validators.required],
      itemId: ['', Validators.required],
      quantity: ['', Validators.required],
      isAvailable: [false, Validators.required],
    });
    this.stockForm.get('isAvailable').valueChanges.subscribe(data => {
      if (!data) {
        this.stockForm.get('quantity').setValue(0);
      }
    });
    this.stockForm.get('quantity').valueChanges.subscribe(data => {
      if (data < 0) {
        this.stockForm.get('quantity').setValue(0);
      }
      if (data > 0) {
        this.stockForm.get('isAvailable').setValue(true);
      }
    });
  }
  
  saveStock() {
    if (this.stockForm.valid) {
      this.itemService.updateStock(this.stockForm.value).subscribe(
        (data) => {
          this.dialog.close();
          this.toastr.success('Success', 'Stock updated successfully');
        },
        (error) => {
          console.log(error);
          this.toastr.error('Error', error?.error?.message);
        }
      );
    }
  }
  closePopup() {
    this.dialog.close();
  }
}
