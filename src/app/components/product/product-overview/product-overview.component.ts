import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/models/product.model';
import { PaginationService } from 'src/app/services/pagination.service';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  dataSource: any[];
  totalCount: number;
  isEmpty: boolean;

  constructor(
    private productDataService: ProductDataService,
    private paginationService: PaginationService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  switchPage(event: PageEvent) {
    this.paginationService.change(event);
    this.getAllProducts();
  }

  delete(product: Product) {
    this.productDataService.fireRequest(product, 'DELETE')
      .subscribe(() => {
        this.dataSource = this.dataSource.filter(x => x.ProductId !== product.ProductId);
      });
  }

  getAllProducts() {
    this.spinner.show();

    setTimeout(() => {
      this.productDataService.getAll<Product[]>()
        .subscribe((result: any) => {
          this.totalCount = JSON.parse(result.headers.get('X-Pagination')).totalCount;
          this.dataSource = result.body.value;
          this.isEmpty = (this.dataSource.length == 0);
          this.spinner.hide();
        });
    }, 3000);
  }
}
