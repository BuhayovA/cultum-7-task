import { Product } from '@md-shared/types/product';
import { createAction } from '../../helpers';

/* ------------- Types ------------- */

export const ADD_PRODUCTS = '@products/ADD_PRODUCTS';
export const PUSH_PRODUCT = '@products/PUSH_PRODUCT';
export const REMOVE_PRODUCT = '@products/REMOVE_PRODUCT';
export const UPDATE_PRODUCT = '@products/UPDATE_PRODUCT';
export const SET_SESSION_KEY = '@products/SET_SESSION_KEY';

/* ------------- Types and Action Creators ------------- */

export const setProductsAction = createAction<typeof ADD_PRODUCTS, Product[]>(ADD_PRODUCTS);
export type SetProductsAction = ReturnType<typeof setProductsAction>;

export const pushProductAction = createAction<typeof PUSH_PRODUCT, Product>(PUSH_PRODUCT);
export type PushProductAction = ReturnType<typeof pushProductAction>;

export const removeProductAction = createAction<typeof REMOVE_PRODUCT, { id: string }>(REMOVE_PRODUCT);
export type RemoveProductAction = ReturnType<typeof removeProductAction>;

export const updateProductAction = createAction<typeof UPDATE_PRODUCT, { id: string; data: Partial<Product> }>(
  UPDATE_PRODUCT
);
export type UpdateProductAction = ReturnType<typeof updateProductAction>;

export const setSessionKeyAction = createAction<typeof SET_SESSION_KEY, { key: string }>(SET_SESSION_KEY);
export type SetSessionKeyAction = ReturnType<typeof setSessionKeyAction>;

type Actions = SetSessionKeyAction | SetProductsAction | PushProductAction | RemoveProductAction | UpdateProductAction;

/* ------------- Initial State ------------- */

export type InitialState = {
  data: Product[];
  sessionKey?: string | null;
};

export const INITIAL_STATE: InitialState = {
  data: [],
  sessionKey: null
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        data: state.data.length ? [...state.data, ...action.payload] : action.payload
      };
    case PUSH_PRODUCT:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        data: state.data.filter(({ id }) => id !== action.payload.id)
      };
    case SET_SESSION_KEY:
      return {
        ...state,
        sessionKey: action.payload.key
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        data: state.data.map((i) => (i.id === action.payload.id ? { ...i, ...action.payload.data } : i))
      };
    default:
      return state;
  }
}
