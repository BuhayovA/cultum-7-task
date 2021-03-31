import * as React from 'react';
// types
import { ClientError } from '@md-utils/errors/custom';
// view components
import { Loader } from '../loader';
import { ErrorWrapper } from '../../errors/content';
// views
import { Wrapper } from './views';

interface Props {
  isLoading: boolean;
  error: ClientError<string> | undefined;
  position?: string;
}

const ContentLoader: React.FC<Props> = ({ position, children, isLoading, error }) => {
  if (isLoading) {
    return (
      <Wrapper position={position}>
        <Loader />
      </Wrapper>
    );
  }

  if (error) {
    return <ErrorWrapper message={error.error} />;
  }

  return <>{children}</>;
};

export { ContentLoader };
