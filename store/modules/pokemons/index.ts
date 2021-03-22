import { createAction } from '../../helpers';
import { Dispatch } from 'redux';
import { createAPI } from '@md-shared/services/api';
import { ClientError, clientError, clientSuccess, ClientSuccess } from '@md-shared/services/api/helpers';
/* ------------- Types ------------- */

export const GET_POKEMONS = '@ui/pokemons/GET_POKEMONS';
export const SET_LOADING = '@ui/pokemons/SET_LOADING';
export const SET_CLIENT_ERROR = '@ui/pokemons/SET_CLIENT_ERROR';

/* ------------- Types and Action Creators ------------- */

type PokemonsRespons = { name: string; url: string }[];

export const setGetPokemonsAction = createAction<typeof GET_POKEMONS, ClientSuccess<PokemonsRespons>>(GET_POKEMONS);
export type SetGetPokemonsAction = ReturnType<typeof setGetPokemonsAction>;

export const setClientError = createAction<typeof SET_CLIENT_ERROR, ClientError<Error>>(SET_CLIENT_ERROR);
export type SetClientError = ReturnType<typeof setClientError>;

export const setLoadingAction = createAction<typeof SET_LOADING, boolean>(SET_LOADING);
export type SetLoadingAction = ReturnType<typeof setLoadingAction>;

type Actions = SetGetPokemonsAction | SetLoadingAction | SetClientError;

/* ------------- Initial State ------------- */

export type InitialState = {
  state: {
    _tag: 'ClientError' | 'ClientSuccess';
    data: { name: string; url: string }[] | undefined;
    error: Error | undefined;
  };
  loading: boolean;
};

export const INITIAL_STATE: InitialState = {
  state: {
    _tag: 'ClientError',
    data: undefined,
    error: undefined
  },
  loading: false
};
/* ------------- Thunk ------------- */

export const getPokemonsThunkCreator = () => {
  return (dispatch: Dispatch<Actions>) => {
    const api = createAPI();
    try {
      dispatch(setLoadingAction(true));
      api.getAllPokemons().then(
        (resp) => {
          dispatch(setLoadingAction(false));
          dispatch(setGetPokemonsAction(clientSuccess<PokemonsRespons>(resp.data.results)));
        },
        (error) => {
          dispatch(setClientError(clientError<Error>(error)));
          dispatch(setLoadingAction(false));
        }
      );
    } catch (err) {
      dispatch(setLoadingAction(false));
      // dispatch(setClientError(err));
    }
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        state: {
          ...state.state,
          _tag: action.payload._tag,
          data: state.state.data ? [...state.state.data, ...action.payload.data] : action.payload.data,
          error: undefined
        }
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_CLIENT_ERROR:
      return {
        ...state,
        state: {
          ...state.state,
          _tag: action.payload._tag,
          data: undefined,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
}
