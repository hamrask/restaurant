import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaiterRoutingModule } from './waiter-routing.module';
import { WaiterComponent } from './waiter.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WaiterOrderComponent } from './waiter-order/waiter-order.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [WaiterComponent, WaiterOrderComponent],
  imports: [
    CommonModule,
    WaiterRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    SharedModule
  ]
})
export class WaiterModule { }
