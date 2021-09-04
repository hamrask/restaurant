import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss']
})
export class UpdateStockComponent implements OnInit {
  stockForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initForm();
    if (this.data) {
      this.stockForm.patchValue(this.data);
    }
  }
  initForm(){
    this.stockForm=this.fb.group({
      itemName:['',Validators.required],
      itemId:['',Validators.required],
      quantity:['',Validators.required],
      isAvailable:['',Validators.required]
    });
  }

}
