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
import { Pokemon } from '@md-shared/types/pokemon';

/* ------------- Types ------------- */

interface Pokemons {
  name: string;
  url: string;
  description: Pokemon | undefined;
}

export type PokemonsRespons = Pick<Pokemons, 'name' | 'url' | 'description'>;

export const GET_POKEMONS = '@ui/pokemons/GET_POKEMONS';
export const SET_LOADING = '@ui/pokemons/SET_LOADING';
export const SET_CLIENT_ERROR = '@ui/pokemons/SET_CLIENT_ERROR';
export const SET_POKEMONS_DESCRIPTIONS = '@ui/pokemons/SET_POKEMONS_DESCRIPTIONS';

/* ------------- Types and Action Creators ------------- */

export const setGetPokemonsAction = createAction<typeof GET_POKEMONS, PokemonsRespons[]>(GET_POKEMONS);
export type SetGetPokemonsAction = ReturnType<typeof setGetPokemonsAction>;

export const setClientError = createAction<typeof SET_CLIENT_ERROR, string>(SET_CLIENT_ERROR);
export type SetClientError = ReturnType<typeof setClientError>;

export const setLoadingAction = createAction<typeof SET_LOADING, boolean>(SET_LOADING);
export type SetLoadingAction = ReturnType<typeof setLoadingAction>;

export const setPokemonsDescriptionsAction = createAction<typeof SET_POKEMONS_DESCRIPTIONS, Pokemon[]>(
  SET_POKEMONS_DESCRIPTIONS
);
export type SetPokemonsDescriptionsAction = ReturnType<typeof setPokemonsDescriptionsAction>;

type Actions = SetGetPokemonsAction | SetLoadingAction | SetClientError | SetPokemonsDescriptionsAction;

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

export const getPokemonsThunkCreator = (): ThunkAction<
  typeof GET_POKEMONS | typeof SET_LOADING | typeof SET_CLIENT_ERROR | typeof SET_POKEMONS_DESCRIPTIONS,
  Promise<ClientSuccess<PokemonsRespons[]> | ClientError<RequestError>>
> => async (dispatch) => {
  const api = createAPI();

  dispatch(setLoadingAction(true));

  try {
    const { data } = await api.getAllPokemons();
    const pokemonsDescriptionsList: Pokemon[] = [];

    for (const pokemon of data.results) {
      const { data } = await api.getPokemon(pokemon.name);
      pokemonsDescriptionsList.push(data);
    }

    dispatch(setGetPokemonsAction(data.results));
    dispatch(setPokemonsDescriptionsAction(pokemonsDescriptionsList));
    dispatch(setLoadingAction(false));

    return clientSuccess(data.results);
  } catch (err) {
    dispatch(setClientError(err.message));
    dispatch(setLoadingAction(false));

    return clientError(getRequestError(err));
  }
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
    case SET_POKEMONS_DESCRIPTIONS:
      return {
        ...state,
        data:
          state.data &&
          state.data.map((pokemon) => ({
            ...pokemon,
            description: action.payload.find((elem) => elem.name === pokemon.name)
          }))
      };
    default:
      return state;
  }
}
