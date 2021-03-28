// helpers
import { createAction, ThunkAction } from '../../helpers';
import { createAPI } from '@md-shared/services/api';
import {
  ClientError,
  clientError,
  ClientSuccess,
  clientSuccess,
  getRequestError,
  RequestError
} from '@md-shared/services/api/helpers';
// types
import { Pokemon } from '@md-shared/types/pokemon';

/* ------------- Types ------------- */

export const GET_POKEMON = '@ui/pokemons/GET_POKEMON';
export const SET_POKEMON_DESCRIPTIONS_LOADING = '@ui/pokemons/SET_POKEMON_DESCRIPTIONS_LOADING';
export const SET_POKEMON_CLIENT_ERROR = '@ui/pokemons/SET_POKEMON_CLIENT_ERROR';
export const SET_TIME_REQUEST_POKEMON = '@ui/pokemons/SET_TIME_REQUEST_POKEMON';

/* ------------- Types and Action Creators ------------- */

export const getPokemonDescriptionsAction = createAction<typeof GET_POKEMON, Pokemon>(GET_POKEMON);
export type GetPokemonDescriptionsAction = ReturnType<typeof getPokemonDescriptionsAction>;

export const setTimeRequestPokemon = createAction<typeof SET_TIME_REQUEST_POKEMON, number>(SET_TIME_REQUEST_POKEMON);
export type SetTimeRequestPokemon = ReturnType<typeof setTimeRequestPokemon>;

export const setPokemonClientError = createAction<typeof SET_POKEMON_CLIENT_ERROR, string>(SET_POKEMON_CLIENT_ERROR);
export type SetPokemonClientError = ReturnType<typeof setPokemonClientError>;

export const setLoadingAction = createAction<typeof SET_POKEMON_DESCRIPTIONS_LOADING, boolean>(
  SET_POKEMON_DESCRIPTIONS_LOADING
);
export type SetLoadingAction = ReturnType<typeof setLoadingAction>;

type Actions = GetPokemonDescriptionsAction | SetLoadingAction | SetPokemonClientError | SetTimeRequestPokemon;

/* ------------- Initial State ------------- */

export type InitialState = {
  data: Pokemon | undefined;
  error: string | undefined;
  loading: boolean;
  responseTime: number | undefined;
};

export const INITIAL_STATE: InitialState = {
  data: undefined,
  error: undefined,
  loading: false,
  responseTime: undefined
};

/* ------------- Thunk ------------- */

export const getPokemonThunkCreator = (
  query: string
): ThunkAction<
  typeof GET_POKEMON | typeof SET_POKEMON_DESCRIPTIONS_LOADING | typeof SET_POKEMON_CLIENT_ERROR,
  Promise<ClientSuccess<Pokemon> | ClientError<RequestError>>
> => async (dispatch) => {
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

    return clientError(getRequestError(err));
  }
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
    case SET_TIME_REQUEST_POKEMON:
      return {
        ...state,
        responseTime: action.payload
      };
    default:
      return state;
  }
}
