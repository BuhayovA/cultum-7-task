import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Card } from '@md-sw-planets/compoonents/card';
// context
import { PlanetsAPIContext } from '@md-sw-planets/layers/api/planets';
import { PlanetsBLContext } from '@md-sw-planets/layers/business';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';

const PlanetsPresentation = () => {
  const { isLoading, error } = React.useContext(PlanetsAPIContext);
  const { planetsList } = React.useContext(PlanetsBLContext);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          {planetsList.map((person) => (
            <Card {...person} key={person.id} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { PlanetsPresentation };
