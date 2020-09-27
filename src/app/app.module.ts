import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductModule } from './components/product/product.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/product.effects';
import { ProductReducer } from './store/reducers/product.reducer';

import { CustomersViewComponent } from './components/customers-view/customers-view.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AngularMaterialModule } from './angular-material.module';
import { DashboardOverviewComponent } from './components/dashboard-overview/dashboard-overview.component';
import { PaginationService } from './services/pagination.service';
import { ProductDataService } from './services/product-data.service';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CustomersViewComponent,
    CustomerAddComponent,
    DashboardOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatAutocompleteModule,
    AngularMaterialModule,
    StoreModule.forRoot({
      product: ProductReducer
    }),
    EffectsModule.forRoot([ProductEffects])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PaginationService, ProductDataService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
