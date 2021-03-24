//redux
import { Dispatch } from 'redux';
//helpers
import { createAction } from '../../helpers';
import { createAPI } from '@md-shared/services/api';
import { clientError, clientSuccess, getRequestError } from '@md-shared/services/api/helpers';
//types
import { Pokemon } from '@md-shared/types/pokemon';

/* ------------- Types ------------- */

export const GET_POKEMON = '@ui/pokemons/GET_POKEMON';
export const SET_POKEMON_DESCRIPTIONS_LOADING = '@ui/pokemons/SET_POKEMON_DESCRIPTIONS_LOADING';
export const SET_POKEMON_CLIENT_ERROR = '@ui/pokemons/SET_POKEMON_CLIENT_ERROR';

/* ------------- Types and Action Creators ------------- */

export const getPokemonDescriptionsAction = createAction<typeof GET_POKEMON, Pokemon>(GET_POKEMON);
export type GetPokemonDescriptionsAction = ReturnType<typeof getPokemonDescriptionsAction>;

export const setPokemonClientError = createAction<typeof SET_POKEMON_CLIENT_ERROR, string>(SET_POKEMON_CLIENT_ERROR);
export type SetPokemonClientError = ReturnType<typeof setPokemonClientError>;

export const setLoadingAction = createAction<typeof SET_POKEMON_DESCRIPTIONS_LOADING, boolean>(
  SET_POKEMON_DESCRIPTIONS_LOADING
);
export type SetLoadingAction = ReturnType<typeof setLoadingAction>;

type Actions = GetPokemonDescriptionsAction | SetLoadingAction | SetPokemonClientError;

/* ------------- Initial State ------------- */

export type InitialState = {
  data: Pokemon | undefined;
  error: string | undefined;
  loading: boolean;
};

export const INITIAL_STATE: InitialState = {
  data: undefined,
  error: undefined,
  loading: false
};
/* ------------- Thunk ------------- */

export const getPokemonThunkCreator = (query: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    const api = createAPI();
    dispatch(setLoadingAction(true));
    try {
      const { data } = await api.getPokemon(query);
      dispatch(getPokemonDescriptionsAction(data));
      dispatch(setLoadingAction(false));
      return clientSuccess(data);
    } catch (err) {
      dispatch(setPokemonClientError(err.message));
      dispatch(setLoadingAction(false));
      console.log(clientError(getRequestError(err)));

      return clientError(err);
    }
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        data: action.payload,
        error: undefined
      };
    case SET_POKEMON_DESCRIPTIONS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_POKEMON_CLIENT_ERROR:
      return {
        ...state,
        data: undefined,
        error: action.payload
      };
    default:
      return state;
  }
}
