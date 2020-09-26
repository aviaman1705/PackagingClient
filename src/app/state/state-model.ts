//import { Country, Stock, Fund } from 'src/app/data/model';

import { Product } from '../models/product.model';

import { ProductState } from './../store/reducers/product.reducer';

export interface AppState {
  readonly product: ProductState
}