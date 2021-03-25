//redux
import { Dispatch } from 'redux';
//helpers
import { createAction } from '../../helpers';
import { createAPI } from '@md-shared/services/api';
import {
  ClientError,
  clientError,
  ClientSuccess,
  clientSuccess,
  getRequestError,
  RequestError
} from '@md-shared/services/api/helpers';

/* ------------- Types ------------- */

export const GET_POKEMONS = '@ui/pokemons/GET_POKEMONS';
export const SET_LOADING = '@ui/pokemons/SET_LOADING';
export const SET_CLIENT_ERROR = '@ui/pokemons/SET_CLIENT_ERROR';
export type PokemonsRespons = { name: string; url: string };

/* ------------- Types and Action Creators ------------- */


export const setGetPokemonsAction = createAction<typeof GET_POKEMONS, PokemonsRespons[]>(GET_POKEMONS);
export type SetGetPokemonsAction = ReturnType<typeof setGetPokemonsAction>;

export const setClientError = createAction<typeof SET_CLIENT_ERROR, string>(SET_CLIENT_ERROR);
export type SetClientError = ReturnType<typeof setClientError>;

export const setLoadingAction = createAction<typeof SET_LOADING, boolean>(SET_LOADING);
export type SetLoadingAction = ReturnType<typeof setLoadingAction>;

type Actions = SetGetPokemonsAction | SetLoadingAction | SetClientError;

/* ------------- Initial State ------------- */

export type InitialState = {
  data: PokemonsRespons[] | undefined;
  error: string | undefined;
  loading: boolean;
};

export const INITIAL_STATE: InitialState = {
  data: undefined,
  error: undefined,
  loading: false
};
/* ------------- Thunk ------------- */

export const getPokemonsThunkCreator = () => {
  return async (
    dispatch: Dispatch<Actions>
  ): Promise<ClientSuccess<{ results: PokemonsRespons[] }> | ClientError<RequestError>> => {
    const api = createAPI();
    dispatch(setLoadingAction(true));
    try {
      const { data } = await api.getAllPokemons();
      dispatch(setGetPokemonsAction(data.results));
      dispatch(setLoadingAction(false));
      return clientSuccess(data);
    } catch (err) {
      dispatch(setClientError(err.message));
      dispatch(setLoadingAction(false));
      return clientError(getRequestError(err));
    }
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        data: state.data && state.data.length ? [...state.data, ...action.payload] : action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_CLIENT_ERROR:
      return {
        ...state,
        data: undefined,
        error: action.payload
      };
    default:
      return state;
  }
}
