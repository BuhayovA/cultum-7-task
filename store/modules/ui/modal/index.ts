import { createAction } from 'store/helpers';

/* ------------- Types ------------- */

export const OPEN_MODAL = '@ui/modal/OPEN_MODAl';
export const CLOSE_MODAL = '@ui/modal/CLOSE_MODAL';

/* ------------- Types and Action Creators ------------- */

export const setOpenModalAction = createAction<typeof OPEN_MODAL>(OPEN_MODAL);
export type SetOpenModalAction = ReturnType<typeof setOpenModalAction>;

export const setCloseModalAction = createAction<typeof CLOSE_MODAL>(CLOSE_MODAL);
export type SetCloseModalAction = ReturnType<typeof setCloseModalAction>;

type Actions = SetOpenModalAction | SetCloseModalAction;

/* ------------- Initial State ------------- */

export type InitialState = {
  open: boolean;
};

export const INITIAL_STATE: InitialState = {
  open: false
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case OPEN_MODAL:
      return state.open
        ? state
        : {
            ...state,
            open: true
          };
    case CLOSE_MODAL:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
}
