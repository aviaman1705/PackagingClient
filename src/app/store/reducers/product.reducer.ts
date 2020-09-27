import { Product } from "../../models/product.model";
import { ProductActionTypes, ProductAction } from '../actions/product.actions';

export interface ProductState {
  item: Product,
  list: Product[],
  loading: boolean,
  error: Error
}

const initialState: ProductState = {
  list: [],
  loading: false,
  error: undefined,
  item: null
};

export function ProductReducer(state: ProductState = initialState, action: ProductAction) {
  switch (action.type) {
    case ProductActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        loading: true
      }
    case ProductActionTypes.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }

    case ProductActionTypes.LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case ProductActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      }
    case ProductActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case ProductActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ProductActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true
      };
    case ProductActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.productId !== action.payload),
        loading: false
      }
    case ProductActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}