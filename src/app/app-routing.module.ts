import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AppComponent } from './app.component';
import { IteemAddComponent } from './iteem-add/iteem-add.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemSectionComponent } from './item-section/item-section.component';
import { TableConfigComponent } from './table-config/table-config.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';

const routes: Routes = [
  {

    path:'',
    component: AppComponent,
    children:[
      {
        path: '',
        redirectTo:'table-config',
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
          path:'table-config',
        component: TableConfigComponent,
          }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
