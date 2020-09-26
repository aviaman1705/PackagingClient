import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReportProductComponent } from './report-product/report-product.component';
import { InventoryBalancesComponent } from './inventory-balances/inventory-balances.component';
import { HistoryComponent } from './history/history.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

const routes: Routes = [
  { path: 'product/:id', component: EditProductComponent },
  { path: 'product', component: AddProductComponent },
  { path: 'products', component: ProductOverviewComponent },
  { path: 'report-product', component: ReportProductComponent },
  { path: 'inventory-balances', component: InventoryBalancesComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
