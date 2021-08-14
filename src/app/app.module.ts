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

@NgModule({
  declarations: [
    AppComponent,
    ItemSectionComponent,
    IteemAddComponent,
    UpdateStockComponent,
    TableConfigComponent,
    AddMenuComponent,
    TakeOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
