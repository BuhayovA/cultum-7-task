import { ThunkAction as ThunkA, ThunkDispatch as ThunkD } from 'redux-thunk';
import { Action as ActionWithoutPayload } from 'redux';
// internal
import { RootStore } from './index';
import { CreateApi } from '@md-shared/services/api';

export type ThunkDispatch = ThunkD<RootStore, CreateApi, ActionWithoutPayload>;

export type ThunkAction<ActionType extends string, ReturnType = Promise<void>> = ThunkA<
  ReturnType,
  RootStore,
  CreateApi,
  ActionWithoutPayload<ActionType>
>;

export type BaseAction<T extends string, P = Record<string, unknown>> = {
  type: T;
  payload: P;
};

export type ActionCreator<T extends string, P = Record<string, unknown>> = (payload: P) => BaseAction<T, P>;

export function createAction<T extends string, P = Record<string, unknown>>(type: T, payload: P): BaseAction<T, P>;
// eslint-disable-next-line no-redeclare
export function createAction<T extends string, P = Record<string, unknown>>(
  type: T
): (payload: Record<string, unknown> extends P ? void : P) => BaseAction<T, P>;
// eslint-disable-next-line no-redeclare
export function createAction<T extends string>(type: T): <P = Record<string, unknown>>(payload: P) => BaseAction<T, P>;
// eslint-disable-next-line no-redeclare
export function createAction(...args: unknown[]): unknown {
  if (args.length > 1) {
    return { type: args[0], payload: args[1] };
  }
  return (payload: unknown) => ({ type: args[0], payload: payload ?? {} });
}
