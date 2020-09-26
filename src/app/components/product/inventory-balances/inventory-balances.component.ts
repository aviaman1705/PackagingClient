import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-inventory-balances',
  templateUrl: './inventory-balances.component.html',
  styleUrls: ['./inventory-balances.component.scss']
})
export class InventoryBalancesComponent implements OnInit {

  list: any;
  sku: string = '';
  warHouseTypeId: number = -1;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void { }

  search(form: NgForm) {
    /** spinner starts on init */
    this.spinner.show();

    this.productService.searchProductsPlaces(this.sku, this.warHouseTypeId).subscribe(
      (res: any) => {
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
          this.list = res;

          if (this.list.length == 0) {
            this.toastr.success('ריק', 'לא נמצאו תוצאות', { timeOut: 3000 });
          }

        }, 5000);
      },
      (response: Error) => {
        this.toastr.error('שגיאה', response.message, { timeOut: 3000 });
      }
    )
  }

  removeInventoryBalance(productPlaceId) { }
}
