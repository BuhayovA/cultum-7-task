import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';

// context
import { SpeciesBLContext } from '@md-star-wars/species/layers/businness';
import { SpeciesAPIContext } from '@md-star-wars/species/layers/api';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';
import { Card } from '@md-star-wars/species/components/card';
import { useContext } from 'react';

const SpicePresentation = () => {
  const { speciesList } = useContext(SpeciesBLContext);
  const { isLoading } = useContext(SpeciesAPIContext);
  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading}>
        <Wrapper>
          {speciesList.map((kind, index) => (
            <Card name={kind.name} id={kind.classification} key={index} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { SpicePresentation };
