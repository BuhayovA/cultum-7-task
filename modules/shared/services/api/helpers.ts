import { AxiosError } from 'axios';

// CLIENT SUCCESS
export type ClientSuccess<T> = {
  _tag: 'ClientSuccess';
  data: T;
};

export const clientSuccess = <R>(result: R): ClientSuccess<R> => ({
  _tag: 'ClientSuccess',
  data: result
});

export type ResponseEither<E, A> = ClientSuccess<E> | ClientError<A>;

export const isClientSuccess = <E, A>(ma: ResponseEither<E, A>): ma is ClientSuccess<E> => ma._tag === 'ClientSuccess';
export const isClientError = <E, A>(ma: ResponseEither<E, A>): ma is ClientError<A> => ma._tag === 'ClientError';

// CLIENT ERROR
export type ClientError<T> = {
  _tag: 'ClientError';
  error: T;
};

export const clientError = <R>(error: R): ClientError<R> => ({
  _tag: 'ClientError',
  error
});

// ERROR
export type RequestError =
  | {
      _tag: 'ResponseError';
      data: any;
      status: number;
    }
  | {
      _tag: 'NoResponseError';
      request: any;
    }
  | {
      _tag: 'RequestError';
      message: string;
    };

export const getRequestError = (error: AxiosError): RequestError => {
  if (error.response) {
    // Request made and server responded
    return {
      _tag: 'ResponseError',
      data: error.response.data,
      status: error.response.status
    };
  } else if (error.request) {
    // The request was made but no response was received
    return {
      _tag: 'NoResponseError',
      request: error.request
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    return {
      _tag: 'RequestError',
      message: error.message
    };
  }
};

export const getRequestErrorMessage = (error: RequestError) => {
  switch (error._tag) {
    case 'ResponseError':
      return error.data.message;
    case 'NoResponseError':
      return JSON.stringify(error.request);
    case 'RequestError':
      return error.message;
  }
};
