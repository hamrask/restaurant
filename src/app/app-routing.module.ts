import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AppComponent } from './app.component';
import { BillReportComponent } from './bill-report/bill-report.component';
import { HomeComponent } from './home/home.component';
import { IteemAddComponent } from './iteem-add/iteem-add.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemSectionComponent } from './item-section/item-section.component';
import { LoginComponent } from './login/login.component';
import { OrderBillComponent } from './order-bill/order-bill.component';
import { TableConfigComponent } from './table-config/table-config.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { WaiterOrderComponent } from './waiter-order/waiter-order.component';

const routes: Routes = [
  {

    path:'',
    component: AppComponent,
    children:[
      {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'add-section',
    component: ItemSectionComponent,
      },
      {
        path:'add-item',
    component: IteemAddComponent,
      },
      {
        path:'update-stock',
    component: UpdateStockComponent,
      },
      {
      path:'take-order',
    component: TakeOrderComponent,
      },
      {
        path:'item-category',
      component: ItemCategoryComponent,
        },
        {
          path:'item-section',
        component: ItemSectionComponent,
          },
          {
            path:'iteem-add',
          component: IteemAddComponent,
            },
        {
          path:'table-config',
        component: TableConfigComponent,
          },
          {
            path:'login',
          component: LoginComponent,
            },
            {
              path:'waiter-order',
            component: WaiterOrderComponent,
              },
              {
                path:'user-management',
              component: UserManagementComponent,
                },
                {
                  path:'user-add',
                component: UserAddComponent,
                  },
                  {
                    path:'order-bill',
                  component: OrderBillComponent,
                    },
                    {
                      path:'bill-report',
                    component: BillReportComponent,
                      },
                      {
                        path:'home',
                      component: HomeComponent,
                        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
