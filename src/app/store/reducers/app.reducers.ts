
// import { Action, MetaReducer, createReducer, on } from '@ngrx/store';
// import * as productActions from '../actions/product.actions';
// import { initialState, AppState } from '../../state/state-model';
// import { environment } from 'src/environments/environment';

// export interface OuterState {
//   appState:AppState
// }
// const appReducer = createReducer(initialState,
//   on(productActions.loadProducts, state => ({ ...state })),
//   on(productActions.loadProductsSuccess, (state, { payload }) => ({ ...state, countryList: payload })),
//   on(productActions.selectProduct, (state, { selectedProductId }) => ({ ...state, selectedProduct:selectedProductId })),
// )

// export function appReducers(appState: AppState | undefined, action: Action) {
//   return appReducer(appState, action);
// }
// export const metaReducers: MetaReducer<OuterState>[] = !environment.production ? [] : [];

