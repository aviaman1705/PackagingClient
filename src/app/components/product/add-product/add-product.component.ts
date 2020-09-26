import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/IProduct';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { positiveNumberValidator } from 'src/app/shared/directives/positive-number.directive';
import { environment } from 'src/environments/environment';
import { AppState } from 'src/app/state/state-model';
import { Store } from '@ngrx/store';
import { AddProductItemAction } from 'src/app/store/actions/product.actions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  image: string;
  public response: { dbPath: '' };

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.addProductForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(25)]],
      sku: ['', [Validators.required]],
      sorting: ['', [Validators.required, positiveNumberValidator]],
      image: [null]
    });
  }

  // create new product object
  onSubmit({ value, valid }: { value: IProduct, valid: boolean }) {

    if (valid) {
      /** spinner starts on init */
      this.spinner.show();
      this.store.dispatch(new AddProductItemAction(value));

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        this.router.navigate(['/products']);
      }, 5000);
    }
  }

  // upload image
  public uploadFinished = (event) => {
    this.response = event;
    this.addProductForm.patchValue({ image: event.dbPath });
  }

  // set image path evey upload
  setImage(image) {
    if (image != undefined)
      return `${environment.rootUrl}${image}`;
    return null;
  }
}
