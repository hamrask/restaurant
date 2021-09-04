import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItemService } from '../../shared/services/item.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss']
})
export class UpdateStockComponent implements OnInit {
  stockForm: FormGroup;

  constructor(private fb: FormBuilder,private itemService: ItemService , @Inject(MAT_DIALOG_DATA) public data: any,
  private dialog: MatDialogRef<UpdateStockComponent>,private toastr :ToastrService) { }

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
  saveStock(){
    if(this.stockForm.valid) {
      this.itemService.saveStock(this.stockForm.value).subscribe(data => {
        this.dialog.close();
        this.toastr.success('Success', 'Section added successfully');
      }, error=> {
        console.log(error);
        this.toastr.error('Error', error?.error?.message);

      }) 
    }
  }

}
