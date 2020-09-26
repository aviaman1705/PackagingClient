import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { EditInventoryBalance } from 'src/app/models/edit-inventory-balance.model';
import { FormGroup, FormControl, NgForm, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { positiveNumberValidator } from '../../../shared/directives/positive-number.directive';
import { ToastrService } from 'ngx-toastr';
import { SearchProduct } from 'src/app/models/search-product.model';

@Component({
  selector: 'edit-inventory-balance',
  templateUrl: './edit-inventory-balance.component.html',
  styleUrls: ['./edit-inventory-balance.component.scss'],
  exportAs: 'testForm'
})
export class EditInventoryBalanceComponent implements OnInit {

  editInventoryBalanceForm: FormGroup;
  currentId: number = null;

  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {

    this.editInventoryBalanceForm = this.fb.group({
      name: ['', [Validators.required]],
      instruction: ["", [Validators.required]],
      count: ['', [Validators.required, positiveNumberValidator]],
      place: ["", [Validators.required]],
      warhouse: ["", [Validators.required]]
    })

    let id = this.route.snapshot.params.id;

    if (id) {
      this.productService.getInventoryBalance(id).subscribe(
        (response: EditInventoryBalance) => {
          this.editInventoryBalanceForm.setValue({
            name: response.name,
            instruction: response.instruction,
            count: response.count,
            place: response.place,
            warhouse: response.warhouse
          });

          this.currentId = response.inventoryBalanceID;
        },
      )
    }
  }

  // Submit Form
  onSubmit({ value, valid }: { value: EditInventoryBalance, valid: boolean }) {

    value.inventoryBalanceID = this.currentId;

    if (valid) {
      this.productService.updateInventoryBalance(value).subscribe(
        (res: SearchProduct) => {
          let result = res;
          this.toastr.success('עדכון', 'הפריט עודכן בהצלחה', { timeOut: 3000 });
        },
        (response: Error) => {
          this.toastr.error('שגיאה', response.message, { timeOut: 3000 });
        }
      )
    }
  }
}
