import { createAction } from '../../helpers';
import { Kind } from '@md-shared/types/kind';
import { Dispatch } from 'redux';
import { createAPI } from '@md-shared/services/api';
//hooks
import { getRequestError } from '@md-modules/shared/services/api/helpers';

/* ------------- Types ------------- */

export const GET_SPECIES = '@ui/species/GET_SPECIES';
export const SET_LOADING = '@ui/species/SET_LOADING';

/* ------------- Types and Action Creators ------------- */

type NotificationType = 'WARNING' | 'ERROR' | 'SUCCESS';

export const setGetSpeciesAction = createAction<typeof GET_SPECIES, Kind[]>(GET_SPECIES);
export type SetGetSpeciesAction = ReturnType<typeof setGetSpeciesAction>;

export const setLoadingAction = createAction<typeof SET_LOADING, boolean>(SET_LOADING);
export type SetLoadingAction = ReturnType<typeof setLoadingAction>;

type Actions = SetGetSpeciesAction | SetLoadingAction;

/* ------------- Initial State ------------- */

export type InitialState = {
  data: Kind[];
  loading: boolean;
  status: NotificationType;
};

export const INITIAL_STATE: InitialState = {
  data: [],
  loading: false,
  status: 'ERROR'
};
/* ------------- Thunk ------------- */


export const getSpeciesThunkCreator = () => {
  return (dispatch: Dispatch<Actions>) => {
    const api = createAPI();
    try {
      dispatch(setLoadingAction(true));
      api.getAllSpecies().then((resp) => {
        console.log(resp);
        dispatch(setLoadingAction(false));
        dispatch(setGetSpeciesAction(resp.data.results));
      });
    } catch (err) {
      getRequestError(err);
    }
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case GET_SPECIES:
      return {
        ...state,
        data: state.data.length ? [...state.data, ...action.payload] : action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}
