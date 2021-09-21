import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillReportComponent } from './bill-report/bill-report.component';
import { HomeComponent } from './home.component';
import { IteemAddComponent } from './iteem-add/iteem-add.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemSectionComponent } from './item-section/item-section.component';
import { TableConfigComponent } from './table-config/table-config.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PrinterComponent } from './printer/printer.component';
import { ProfileComponent } from './profile/profile.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { WaiterOrderComponent } from './waiter-order/waiter-order.component';
import { OrderHomeComponent } from './order-home/order-home.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'order',
        pathMatch: 'full'
      },
      {
        path: 'section',
        component: ItemSectionComponent,
      },
      {
        path: 'item',
        component: IteemAddComponent,
      },
      {
        path: 'stock',
        component: UpdateStockComponent,
      },
      {
        path: 'order',
        component: OrderHomeComponent,
      },
      {
        path: 'category',
        component: ItemCategoryComponent,
      },
      {
        path: 'add-item',
        component: IteemAddComponent,
      },
      {
        path: 'table-config',
        component: TableConfigComponent,
      },
      {
        path: 'user-management',
        component: UserManagementComponent,
      },
      {
        path: 'add-user',
        component: UserAddComponent,
      },
      {
        path: 'add-user/:userId',
        component: UserAddComponent,
      },
      {
        path: 'bill-report',
        component: BillReportComponent,
      },
      {
        path: 'printer',
        component: PrinterComponent,
      },
      {
        path:'restaurant',
        component: ProfileComponent
      },
      {
        path:'add-customer',
        component: AddCustomerComponent
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
