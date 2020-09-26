import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service'
import { AddProductItemAction, AddProductItemFailureAction, AddProductItemSuccessAction, DeleteIProductemAction, LoadProductsAction, LoadProductsFailureAction, LoadProductsSuccessAction, ProductActionTypes, UpdateProductItemAction, UpdateProductItemSuccessAction } from '../actions/product.actions';

@Injectable()
export class ProductEffects {


  @Effect() createProduct$ = this.actions$
    .pipe(
      ofType<AddProductItemAction>(ProductActionTypes.ADD_ITEM),
      mergeMap(
        (action) => this.ProductService.insertProduct(action.payload)
          .pipe(
            map(data => {
              return new AddProductItemSuccessAction(data);
            }),
            catchError(error => of(new AddProductItemFailureAction(error)))
          )
      )
    )

  @Effect() loadProducts$ = this.actions$
    .pipe(
      ofType<LoadProductsAction>(ProductActionTypes.LOAD_PRODUCTS),
      mergeMap(
        () => this.ProductService.getPtoducts()
          .pipe(
            map(data => {
              return new LoadProductsSuccessAction(data)
            }),
            catchError(error => of(new LoadProductsFailureAction(error)))
          )
      ),
    )

  @Effect() deleteProduct$ = this.actions$
    .pipe(
      ofType<DeleteIProductemAction>(ProductActionTypes.DELETE_ITEM),
      mergeMap(
        (action) => this.ProductService.deleteProduct(action.payload)
          .pipe(
            map(data => {
              return new LoadProductsAction();
            })
          )
      )
    )

  @Effect() updateProduct$ = this.actions$
    .pipe(
      ofType<UpdateProductItemAction>(ProductActionTypes.UPDATE_ITEM),
      mergeMap(
        (action) => this.ProductService.updatePtoduct(action.payload)
          .pipe(
            map(data => {
              return new UpdateProductItemSuccessAction(action.payload.ProductId);
            })
          )
      )
    )

  constructor(
    private actions$: Actions,
    private ProductService: ProductService
  ) { }
}