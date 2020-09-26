import { OuterState } from '../reducers/app.reducers';
import { createSelector } from '@ngrx/store';

export const selectSelectedProduct = (state:OuterState) => state.appState.selectedProduct;
export const getSelectedProduct = createSelector(
    selectSelectedProduct,
    selectedProduct => selectedProduct
);