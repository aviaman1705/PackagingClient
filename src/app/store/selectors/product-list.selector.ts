import { createSelector } from '@ngrx/store';
import { OuterState } from '../reducers/app.reducers';

export const selectProductList = (state:OuterState) => state.appState.productList;
export const getProductList = createSelector(
    selectProductList,
    productList => productList
);