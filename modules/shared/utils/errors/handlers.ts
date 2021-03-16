import { ApolloError } from '@apollo/client';
import flow from 'lodash/flow';
import * as E from './custom';

export function handleGraphqlErrorMsg(error: Error | ApolloError): string {
  if ('graphQLErrors' in error && error.graphQLErrors && error.graphQLErrors.length) {
    return error.graphQLErrors.map(({ message }: { message: string }) => message).join('. ');
  } else if ('message' in error && error.message) {
    return error.message;
  }

  return 'Unexpected Error';
}

export const parseAndCreateClientError = flow(handleGraphqlErrorMsg, E.clientError);
