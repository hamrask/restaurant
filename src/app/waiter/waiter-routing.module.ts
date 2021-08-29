import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaiterOrderComponent } from './waiter-order/waiter-order.component';
import { WaiterComponent } from './waiter.component';

const routes: Routes = [
  {
    path: '',
    component: WaiterComponent,
    children: [
      {
        path: '',
        component: WaiterOrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }
