import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderBillComponent } from './component/order-bill/order-bill.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DeleteConfirmComponent } from './component/delete-confirm/delete-confirm.component';
import { ItemQuantityComponent } from './component/item-quantity/item-quantity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [OrderBillComponent, DeleteConfirmComponent, ItemQuantityComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule    
  ],
  exports: [OrderBillComponent]
})
export class SharedModule { }
