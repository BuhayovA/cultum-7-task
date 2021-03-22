import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';

// context
import { PokemonsBLContext } from '@md-star-wars/pokemons/layers/businness';
import { PokemonsAPIContext } from '@md-star-wars/pokemons/layers/api';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';
import { Card } from '@md-star-wars/pokemons/components/card';
import { useContext } from 'react';

const PokemonsPresentation = () => {
  const { pokemonsList } = useContext(PokemonsBLContext);
  const { isLoading, error } = useContext(PokemonsAPIContext);
  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error ? { error: error?.message, _tag: 'ClientError' } : undefined}>
        <Wrapper>
          {pokemonsList.map((kind, index) => (
            <Card name={kind.name} id={kind.classification} key={index} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { PokemonsPresentation };
