import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Card } from '@md-sw-starships/compoonents/card';
// context
import { StarshipsAPIContext } from '@md-sw-starships/layers/api/starships';
import { StarshipsBLContext } from '@md-sw-starships/layers/business';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';

const StarshipsPresentation = () => {
  const { isLoading, error } = React.useContext(StarshipsAPIContext);
  const { starshipsList } = React.useContext(StarshipsBLContext);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          {starshipsList.map((starship) => (
            <Card {...starship} key={starship.id} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { StarshipsPresentation };
