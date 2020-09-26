import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UploadComponent } from 'src/app/upload/upload.component';
import { ReportProductComponent } from './report-product/report-product.component';
import { InventoryBalancesComponent } from './inventory-balances/inventory-balances.component';
import { EditInventoryBalanceComponent } from './edit-inventory-balance/edit-inventory-balance.component';
import { HistoryComponent } from './history/history.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularMaterialModule } from './../../angular-material.module';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductDataService } from 'src/app/services/product-data.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { CustomPaginator } from './../../config/CustomPaginatorConfiguration';
import { MatPaginatorIntl } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
    UploadComponent,
    ReportProductComponent,
    InventoryBalancesComponent,
    EditInventoryBalanceComponent,
    HistoryComponent,
    ProductOverviewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    AngularMaterialModule
  ],
  providers:[ PaginationService,ProductDataService , { provide: MatPaginatorIntl, useValue: CustomPaginator()}],
})
export class ProductModule { }
