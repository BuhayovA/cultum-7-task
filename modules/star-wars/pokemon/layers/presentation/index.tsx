import * as React from 'react';
// context
import { PokemonBLContext } from '@md-star-wars/pokemon/layers/business';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { PokemonInfo } from '@md-star-wars/pokemon/components/pokemon-info';
// views
import {
  ContentWrapper,
  PokemonDetailsContainer,
  PokemonImgContainer,
  PokemonInfoContainer,
  PokemonName,
  Wrapper
} from './views';

const PokemonPresentation = () => {
  const { pokemonInfo, isLoading, error, pokemon } = React.useContext(PokemonBLContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading} error={error}>
          <PokemonImgContainer>
            <img src='/static/images/planet.png' alt='planet' />
          </PokemonImgContainer>
          <PokemonDetailsContainer>
            {pokemon && <PokemonName>{pokemon.name}</PokemonName>}
            <PokemonInfoContainer>
              {pokemonInfo.map((i, idx) => (
                <PokemonInfo key={idx} {...i} />
              ))}
            </PokemonInfoContainer>
          </PokemonDetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { PokemonPresentation };
