import { createAction, props,Action } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/IProduct';
import { Product } from '../../models/product.model';

export enum ProductActionTypes {
    LOAD_PRODUCTS = '[PRODUCTS] Load Products',
    LOAD_PRODUCTS_SUCCESS = '[PRODUCTS] Load Products Success',
    LOAD_PRODUCTS_FAILURE = '[PRODUCTS] Load Products Failure',
    ADD_ITEM = '[PRODUCT] Add Item',
    ADD_ITEM_SUCCESS = '[PRODUCT] Add Item Success',
    ADD_ITEM_FAILURE = '[PRODUCT] Add Item Failure',
    DELETE_ITEM = '[PRODUCT] Delete Item',
    DELETE_ITEM_SUCCESS = '[PRODUCT] Delete Item Success',
    DELETE_ITEM_FAILURE = '[PRODUCT] Delete Item Failure',
    UPDATE_ITEM = '[PRODUCT] UPDATE Item',
    UPDATE_ITEM_SUCCESS = '[PRODUCT] Update Item Success',
    UPDATE_ITEM_FAILURE = '[PRODUCT] Update Item Failure',
  }

  export class LoadProductsAction implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS
  }

  export class LoadProductsSuccessAction implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS
    constructor(public payload: Array<Product>) {}
  }

  export class LoadProductsFailureAction implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS_FAILURE

    constructor(public payload: Error) {
      console.log(payload);
    }
  }
  
  export class AddProductItemAction implements Action {
    readonly type = ProductActionTypes.ADD_ITEM
  
    constructor(public payload: IProduct) { }
  }

  export class AddProductItemSuccessAction implements Action {
    readonly type = ProductActionTypes.ADD_ITEM_SUCCESS
  
    constructor(public payload: IProduct) { }
  }
  
  export class AddProductItemFailureAction implements Action {
    readonly type = ProductActionTypes.ADD_ITEM_FAILURE
  
    constructor(public payload: Error) {
      console.log(payload);
     }
  }
  
  export class DeleteIProductemAction implements Action {
    readonly type = ProductActionTypes.DELETE_ITEM
  
    constructor(public payload: number) { }
  }
  
  export class DeleteProductItemSuccessAction implements Action {
    readonly type = ProductActionTypes.DELETE_ITEM_SUCCESS
  
    constructor(public payload: number) { }
  }

  export class DeleteProductItemFailureAction implements Action {
    readonly type = ProductActionTypes.DELETE_ITEM_FAILURE
  
    constructor(public payload: Error) {
      console.log(payload);
     }
  }

  export class UpdateProductItemAction implements Action {
    readonly type = ProductActionTypes.UPDATE_ITEM
  
    constructor(public payload: IProduct) { }
  }

  export class UpdateProductItemSuccessAction implements Action {
    readonly type = ProductActionTypes.UPDATE_ITEM_SUCCESS
  
    constructor(public payload: number) { }
  }

  export class UpdateProductItemFailureAction implements Action {
    readonly type = ProductActionTypes.UPDATE_ITEM_FAILURE
  
    constructor(public payload: Error) {
      console.log(payload);
    }
  }

  export type ProductAction = 
  AddProductItemAction | DeleteIProductemAction | 
  LoadProductsAction | LoadProductsSuccessAction | 
  LoadProductsFailureAction | DeleteProductItemFailureAction| 
  AddProductItemSuccessAction | AddProductItemFailureAction |
  DeleteProductItemSuccessAction | DeleteProductItemFailureAction | 
  UpdateProductItemAction | UpdateProductItemFailureAction | 
  UpdateProductItemSuccessAction