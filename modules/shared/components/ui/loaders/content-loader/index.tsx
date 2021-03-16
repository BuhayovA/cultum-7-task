import * as React from 'react';
// libs
import styled from 'styled-components';
// types
import { ClientError } from '@md-utils/errors/custom';
// view components
import { Loader } from '../loader';
import { ErrorWrapper } from '../../errors/content';

interface Props {
  isLoading: boolean;
  error?: ClientError<string>;
}

const Wrapper = styled.div`
  ${({ theme }) => theme.templates.absolute};
  ${({ theme }) => theme.templates.centerContent};
`;

const ContentLoader: React.FC<Props> = ({ children, isLoading, error }) => {
  if (isLoading) {
    return (
      <Wrapper>
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
