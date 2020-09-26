import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { positiveNumberValidator } from 'src/app/shared/directives/positive-number.directive';
import { IProduct } from 'src/app/interfaces/IProduct';
import { AppState } from 'src/app/state/state-model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UpdateProductItemAction } from 'src/app/store/actions/product.actions';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  editProductForm: FormGroup;
  productId: number;
  image: string;
  public response: { dbPath: '' };

  productItems: Observable<Product>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  newProductItem: Product = null;

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private store: Store<AppState>) { }

  ngOnInit(): void {

    this.editProductForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(25)]],
      sku: ['', [Validators.required]],
      sorting: ['', [Validators.required, positiveNumberValidator]],
      image: [null]
    });

    let id = this.route.snapshot.params.id;

    if (id) {
      this.productService.getProduct(id).subscribe(
        (response: Product) => {
          this.editProductForm.setValue({
            name: response.name,
            sku: response.sku,
            sorting: response.sorting,
            image: response.image
          });

          this.productId = response.ProductId;
        }
      )
    }
  }

  // edit exsiting product
  public onSubmit({ value, valid }: { value: IProduct, valid: boolean }) {

    value.ProductId = this.productId;

    if (valid) {
      /** spinner starts on init */
      this.spinner.show();

      this.store.dispatch(new UpdateProductItemAction(value));

      setTimeout(() => {
        this.spinner.hide();
        this.toastr.success('עדכון', 'הפריט עודכן בהצלחה', { timeOut: 3000 });
      }, 5000);
    }
  }

  // upload image
  public uploadFinished = (event) => {
    this.response = event;
    this.editProductForm.patchValue({ image: event.dbPath });
  }

  // set image path evey upload
  setImage(image) {
    if (image != undefined)
      return 'https://localhost:44340/' + image;
    return null;
  }
}
