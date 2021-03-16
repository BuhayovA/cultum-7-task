import * as React from 'react';
// context
import { PlanetAPIContext } from '@md-sw-planet/layers/api/planet';
import { PlanetBLContext } from '@md-sw-planet/layers/business';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { PlanetInfo } from '@md-sw-planet/components/planet-info';
// views
import {
  ContentWrapper,
  PlanetDetailsContainer,
  PlanetImgContainer,
  PlanetInfoContainer,
  PlanetName,
  Wrapper
} from './views';

const PlanetPresentation = () => {
  const { isLoading, planet, error } = React.useContext(PlanetAPIContext);
  const { planetInfo } = React.useContext(PlanetBLContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading} error={error}>
          <PlanetImgContainer>
            <img src='/static/images/planet.png' alt='planet' />
          </PlanetImgContainer>
          <PlanetDetailsContainer>
            {planet && <PlanetName>{planet.name}</PlanetName>}
            <PlanetInfoContainer>
              {planetInfo.map((i, idx) => (
                <PlanetInfo key={idx} {...i} />
              ))}
            </PlanetInfoContainer>
          </PlanetDetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { PlanetPresentation };
