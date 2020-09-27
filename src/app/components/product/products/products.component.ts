import { Product } from '../../../models/product.model';
import { AppState } from '../../../state/state-model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationService } from 'src/app/services/pagination.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginator } from 'src/app/config/CustomPaginatorConfiguration';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  dataSource = new MatTableDataSource<Product>();
  displayedColumns = ['productId', 'name', 'sku', 'image', 'sorting', 'actions'];

  @Input('dataSource')

  set allowDay(value: Product[]) {
    if (value != undefined)
      this.isEmpty = false;
    else
      this.isEmpty = true;
    this.dataSource = new MatTableDataSource<Product>(value);
  }

  @Input() isEmpty: boolean;
  @Input() totalCount: number;
  @Output() onDeleteCustomer = new EventEmitter();
  @Output() onPageSwitch = new EventEmitter();
  @Output() onSortData = new EventEmitter();

  constructor(public paginationService: PaginationService) { }

  setImage(image) {
    if (image == null)
      return 'assets/img/photo_gallery.jpg'
    else
      return `${environment.rootUrl}${image}`;
  }
}



