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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
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
        component: TakeOrderComponent,
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
        path: 'bill-report',
        component: BillReportComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
