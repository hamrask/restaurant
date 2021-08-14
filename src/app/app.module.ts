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
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
