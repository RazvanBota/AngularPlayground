// import { ShoppingListState,  shoppingListReducer } from './shopping-list.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.state';
import { reducer } from './chat.reducer';

export const rootReducer = {};

export const reducers: ActionReducerMap<AppState, any> = { conversation: reducer };