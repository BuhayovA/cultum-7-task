import * as React from 'react';
// context
import { StarshipAPIContext } from '@md-sw-starship/layers/api/starship';
import { StarshipBLContext } from '@md-sw-starship/layers/business';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { StarshipInfo } from '@md-sw-starship/components/starship-info';
// views
import {
  ContentWrapper,
  StarshipDetailsContainer,
  StarshipImgContainer,
  StarshipInfoContainer,
  StarshipName,
  Wrapper
} from './views';

const StarshipPresentation = () => {
  const { isLoading, starship, error } = React.useContext(StarshipAPIContext);
  const { starshipInfo } = React.useContext(StarshipBLContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading} error={error}>
          <StarshipImgContainer>
            <img src='/static/images/starship.jpg' alt='Kenobi' />
          </StarshipImgContainer>
          <StarshipDetailsContainer>
            {starship && <StarshipName>{starship.name}</StarshipName>}
            <StarshipInfoContainer>
              {starshipInfo.map((i, idx) => (
                <StarshipInfo key={idx} {...i} />
              ))}
            </StarshipInfoContainer>
          </StarshipDetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { StarshipPresentation };
