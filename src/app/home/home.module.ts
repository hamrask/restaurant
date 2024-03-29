import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BillReportComponent } from './bill-report/bill-report.component';
import { IteemAddComponent } from './iteem-add/iteem-add.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemSectionComponent } from './item-section/item-section.component';
import { TableConfigComponent } from './table-config/table-config.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { PrinterComponent } from './printer/printer.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ProfileComponent } from './profile/profile.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../shared/shared.module';
import { WaiterOrderComponent } from './waiter-order/waiter-order.component';
import { MatCardModule } from '@angular/material/card';
import { OrderHomeComponent } from './order-home/order-home.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatChipsModule } from '@angular/material/chips';
import { AuthModule } from '../auth/auth.module';
import { MatNativeDateModule } from '@angular/material/core';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { MainOrderPageComponent } from './main-order-page/main-order-page.component';

import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    HomeComponent,
    ItemSectionComponent,
    IteemAddComponent,
    UpdateStockComponent,
    TakeOrderComponent,
    ItemCategoryComponent,
    TableConfigComponent,
    UserManagementComponent,
    UserAddComponent,
    BillReportComponent,
    PrinterComponent,
    ProfileComponent,
    AddCustomerComponent,
    WaiterOrderComponent,
    OrderHomeComponent,
    OrderHistoryComponent,
    MainOrderPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    SharedModule,
    MatCardModule,
    MatStepperModule,
    MatChipsModule,
    AuthModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule
  ]
})
export class HomeModule { }
