import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IteemAddComponent } from './iteem-add/iteem-add.component';
import { ItemSectionComponent } from './item-section/item-section.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';


const routes: Routes = [
  {

    path:'',
    component: AppComponent,
    children:[
      {
        path: '',
        redirectTo:'update-stock',
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
