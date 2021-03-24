import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
// context
import { PokemonsBLContext } from '@md-star-wars/pokemons/layers/businness';
import { PokemonsAPIContext } from '@md-star-wars/pokemons/layers/api';
// views components
import { Card } from '@md-star-wars/pokemons/components/card';
import { useContext } from 'react';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';

const PokemonsPresentation = () => {
  // add business logic here
  const { pokemonsList } = useContext(PokemonsBLContext);
  // add api logic here
  const { isLoading, error } = useContext(PokemonsAPIContext);
  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          {pokemonsList.map((pokemon, index) => (
            <Card name={pokemon.name} id={pokemon.name} key={index} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { PokemonsPresentation };
