import { Product } from '../../../models/product.model';
import { AppState } from '../../../state/state-model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationService } from 'src/app/services/pagination.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginator } from 'src/app/config/CustomPaginatorConfiguration';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  dataSource = new MatTableDataSource<Product>();
  displayedColumns = ['id', 'name', 'sku', 'image', 'sorting', 'actions'];

  @Input('dataSource')

  set allowDay(value: Product[]) {
    this.dataSource = new MatTableDataSource<Product>(value);
  }
  @Input() totalCount: number;
  @Output() onDeleteCustomer = new EventEmitter();
  @Output() onPageSwitch = new EventEmitter();

  constructor(public paginationService: PaginationService) {}
}

  // productItems: Observable<Array<Product>>;
  // loading$: Observable<Boolean>;
  // error$: Observable<Error>
  // newProductItem: Product = null;

  // constructor(private store: Store<AppState>) { }

  // ngOnInit() {
  //   this.productItems = this.store.select(store => store.product.list);
  //   this.loading$ = this.store.select(store => store.product.loading);
  //   this.error$ = this.store.select(store => store.product.error);
  //   this.store.dispatch(new LoadProductsAction());
  // }

  // deleteItem(id: number) { 
  //   if (confirm(`בטוח שברצונך למחוק את פריט ${id} ?`)) {
  //     this.store.dispatch(new DeleteIProductemAction(id));
  //   }
  // }

  // setImage(image) {
  //   return `${environment.rootUrl}${image}`;
  // }
