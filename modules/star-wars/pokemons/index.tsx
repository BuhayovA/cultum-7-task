import * as React from 'react';
// libs
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// mock
import { getPokemonsThunkCreator, InitialState as PokemonsState } from 'store/modules/pokemons/pokemons';
import { RootStore } from 'store';
// helpers
import { clientError } from '@md-shared/services/api/helpers';
import { ThunkDispatch } from 'store/helpers';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Card } from '@md-star-wars/pokemons/components/card';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';

const PokemonsContainer = () => {
  // hooks
  const dispatch = useDispatch<ThunkDispatch>();

  useEffect(() => {
    dispatch(getPokemonsThunkCreator());
  }, [dispatch]);

  // take data from the redux-state.
  const { data, loading, error } = useSelector<RootStore, PokemonsState>(({ pokemons }) => pokemons.pokemons);

  return (
    <ContentWrapper>
      <ContentLoader position='absolute' isLoading={loading} error={error ? clientError(error) : undefined}>
        <Wrapper>
          {data &&
            data.map((pokemon, index) => (
              <Card
                baseExperience={pokemon.descriptions?.base_experience}
                baseStat={pokemon?.descriptions?.stats.map((stat) => stat.base_stat)}
                name={pokemon.name}
                id={pokemon.name}
                key={index}
              />
            ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export default PokemonsContainer;
