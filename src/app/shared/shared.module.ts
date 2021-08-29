import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderBillComponent } from './component/order-bill/order-bill.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
export { OrderBillComponent } from './component/order-bill/order-bill.component';


@NgModule({
  declarations: [OrderBillComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [OrderBillComponent]
})
export class SharedModule { }
