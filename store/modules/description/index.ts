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

interface Description {
  name?: string;
  data?: Pokemon;
  loading?: boolean;
  error?: string;
}

export const SET_POKEMONS_DESCRIPTIONS_LOADING = '@ui/pokemons/SET_POKEMONS_DESCRIPTIONS_LOADING';
export const SET_DESCRIPTIONS_CLIENT_ERROR = '@ui/pokemons/SET_DESCRIPTIONS_CLIENT_ERROR';
export const SET_DESCRIPTIONS = '@ui/pokemons/SET_DESCRIPTIONS';

/* ------------- Types and Action Creators ------------- */

export const setDescriptionsAction = createAction<typeof SET_DESCRIPTIONS, Pokemon>(SET_DESCRIPTIONS);
export type SetDescriptionsAction = ReturnType<typeof setDescriptionsAction>;

export const setPokemonsDescriptionsLoadingAction = createAction<
  typeof SET_POKEMONS_DESCRIPTIONS_LOADING,
  { loading: boolean; name: string }
>(SET_POKEMONS_DESCRIPTIONS_LOADING);
export type SetPokemonsDescriptionsLoadingAction = ReturnType<typeof setPokemonsDescriptionsLoadingAction>;

export const setDescriptionsClientErrorAction = createAction<
  typeof SET_DESCRIPTIONS_CLIENT_ERROR,
  { error: string; name: string }
>(SET_DESCRIPTIONS_CLIENT_ERROR);
export type SetDescriptionsClientErrorAction = ReturnType<typeof setDescriptionsClientErrorAction>;

type Actions = SetPokemonsDescriptionsLoadingAction | SetDescriptionsClientErrorAction | SetDescriptionsAction;

/* ------------- Utils ------------- */

const changeState = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case SET_POKEMONS_DESCRIPTIONS_LOADING:
      return {
        ...state,
        descriptions:
          state.descriptions && state.descriptions.length
            ? state.descriptions.some((description) => description.name === action.payload.name)
              ? [
                  ...state.descriptions.filter((description) => description.name !== action.payload.name),
                  {
                    ...state.descriptions.find((description) => description.name === action.payload.name),
                    name: action.payload.name,
                    loading: action.payload.loading
                  }
                ]
              : [...state.descriptions, { ...action.payload }]
            : [{ ...action.payload }]
      };
    case SET_DESCRIPTIONS:
      return {
        ...state,
        descriptions:
          state.descriptions && state.descriptions.length
            ? [
                ...state.descriptions.filter((description) => description.name !== action.payload.name),
                {
                  ...state.descriptions.find((description) => description.name === action.payload.name),
                  data: action.payload
                }
              ]
            : [{ data: action.payload }]
      };
    case SET_DESCRIPTIONS_CLIENT_ERROR:
      return {
        ...state,
        descriptions:
          state.descriptions && state.descriptions.length
            ? state.descriptions.some((description) => description.name === action.payload.name)
              ? [
                  ...state.descriptions.filter((description) => description.name !== action.payload.name),
                  {
                    ...state.descriptions.find((description) => description.name === action.payload.name),
                    error: action.payload.error,
                    name: action.payload.name
                  }
                ]
              : [...state.descriptions, { error: action.payload.error, name: action.payload.name }]
            : [{ error: action.payload.error, name: action.payload.name }]
      };
  }
};

/* ------------- Initial State ------------- */

export type InitialState = {
  descriptions: Description[];
};

export const INITIAL_STATE: InitialState = {
  descriptions: []
};

/* ------------- Thunk ------------- */

export const getPokemonsDescriptionThunkCreator = (
  query: string
): ThunkAction<
  typeof SET_POKEMONS_DESCRIPTIONS_LOADING | typeof SET_DESCRIPTIONS_CLIENT_ERROR | typeof SET_DESCRIPTIONS,
  Promise<ClientSuccess<Pokemon> | ClientError<RequestError>>
> => async (dispatch) => {
  const api = createAPI();

  dispatch(setPokemonsDescriptionsLoadingAction({ loading: true, name: query }));

  try {
    const { data } = await api.getPokemon(query as string);
    dispatch(setDescriptionsAction(data));
    dispatch(setPokemonsDescriptionsLoadingAction({ loading: false, name: query }));

    return clientSuccess(data);
  } catch (err) {
    dispatch(setDescriptionsClientErrorAction({ error: err.message, name: query }));
    dispatch(setPokemonsDescriptionsLoadingAction({ loading: false, name: query }));

    return clientError(getRequestError(err));
  }
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case SET_POKEMONS_DESCRIPTIONS_LOADING:
      return changeState(state, action);
    case SET_DESCRIPTIONS:
      return changeState(state, action);
    case SET_DESCRIPTIONS_CLIENT_ERROR:
      return changeState(state, action);
    default:
      return state;
  }
}
