import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemSectionComponent } from './item-section/item-section.component';
import { IteemAddComponent } from './iteem-add/iteem-add.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { TableConfigComponent } from './table-config/table-config.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { LoginComponent } from './login/login.component';
import {MatCard, MatCardModule} from '@angular/material/card';
import { WaiterOrderComponent } from './waiter-order/waiter-order.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserAddComponent } from './user-add/user-add.component';
import { OrderBillComponent } from './order-bill/order-bill.component';
import { BillReportComponent } from './bill-report/bill-report.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';






@NgModule({
  declarations: [
    AppComponent,
    ItemSectionComponent,
    IteemAddComponent,
    UpdateStockComponent,
    TableConfigComponent,
    AddMenuComponent,
    TakeOrderComponent,
    ItemCategoryComponent,
    LoginComponent,
    WaiterOrderComponent,
    UserManagementComponent,
    UserAddComponent,
    OrderBillComponent,
    BillReportComponent,
    HomeComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
