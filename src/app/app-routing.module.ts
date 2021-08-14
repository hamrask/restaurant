import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IteemAddComponent } from './iteem-add/iteem-add.component';
import { ItemSectionComponent } from './item-section/item-section.component';

const routes: Routes = [
  {

    path:'',
    component: AppComponent,
    children:[
      {
        path: '',
        redirectTo:'add-item',
        pathMatch:'full'
      },
      {
        path:'add-section',
    component: ItemSectionComponent,
      },
      {
        path:'add-item',
    component: IteemAddComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
