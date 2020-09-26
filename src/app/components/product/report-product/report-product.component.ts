import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProductPlace } from 'src/app/interfaces/IProduct-Place';
import { ListItem } from 'src/app/models/list-item.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProductPlace } from 'src/app/models/product-place.model';
import { positiveNumberValidator } from 'src/app/shared/directives/positive-number.directive';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-report-product',
  templateUrl: './report-product.component.html',
  styleUrls: ['./report-product.component.scss']
})
export class ReportProductComponent implements OnInit {

  addProductPlaceForm: FormGroup;
  selectedProductId: number;
  selectedPlaceId: number;

  //@ViewChild('myname') input;
  places: ListItem[] = [];
  products: ListItem[] = [];
  newProductPlace: ProductPlace = null;
  selectedProductName: string = null;
  instruction: string;
  selectedPlaceName: string = null;
  count: number;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) {
    //this.newProductPlace = new ProductPlace()
    this.loadProducts();
    this.loadPlaces();
  }

  ngOnInit(): void {
    this.addProductPlaceForm = this.fb.group({
      productId: ['', [Validators.required, Validators.maxLength(25)]],
      instruction: ['', [Validators.required]],
      count: ['', [Validators.required, positiveNumberValidator]],
      placeId: ['', [Validators.required]]
    });
  }

  //populate products autocomplete
  loadProducts() {
    this.productService.getProductsListItem().subscribe(
      (res: ListItem[]) => {
        Object.assign(this.products = res);
      }
    )
  }

  // populate places autocomplete
  loadPlaces() {
    this.productService.getPlacesListItem().subscribe(
      (res: ListItem[]) => {
        Object.assign(this.places = res);
      }
    )
  }

  // set the product every change
  onProductsAutoChange($event) {
    let selectedProduct = this.products.filter(x => x.key === $event.target.value)[0];

    if (selectedProduct != null) {
      this.selectedProductId = selectedProduct.value;
    } else {
      //this.input.nativeElement.value = null;
      //this.selectedProductName = null;
    }
  }

  // set place id every change
  onPlacesAutoChange($event) {
    let selectedPlace = this.places.filter(x => x.key === $event.target.value)[0];
    if (selectedPlace != null) {
      this.selectedPlaceId = selectedPlace.value;
    }
  }

  // create new product place object
  public onSubmit({ value, valid }: { value: IProductPlace, valid: boolean }) {
    if (valid) {
      
      value.productId = this.selectedProductId;
      value.placeId = this.selectedPlaceId;

      /** spinner starts on init */
      this.spinner.show();

      this.productService.insertProductPlace(value).subscribe(
        (res: ProductPlace) => {
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
            this.toastr.success('הוספה', 'הפריט נוסף בהצלחה', { timeOut: 3000 });
          }, 5000);
          //alert(res + '  נוסף בהצלחה');
        },
        (response: Error) => {
          this.toastr.error('שגיאה', response.message, { timeOut: 3000 });
        }
      )

    }
  }
}
