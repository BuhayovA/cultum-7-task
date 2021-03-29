import * as React from 'react';
// libs
import { useDispatch, useSelector } from 'react-redux';
// mock
import { getPokemonsThunkCreator, InitialState as PokemonsState } from 'store/modules/pokemons';
import { RootStore } from 'store';
// helpers
import { clientError } from '@md-shared/services/api/helpers';
import { ThunkDispatch } from 'store/helpers';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Card } from '@md-star-wars/pokemons/components/card';
import { useEffect } from 'react';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';

const PokemonsContainer = () => {
  const dispatch = useDispatch<ThunkDispatch>();

  // make api call here
  useEffect(() => {
    dispatch(getPokemonsThunkCreator());
  }, [dispatch]);

  // take data from the redux-state.
  const { data, loading, error } = useSelector<RootStore, PokemonsState>(({ pokemons }) => pokemons);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={loading} error={error ? clientError(error) : undefined}>
        <Wrapper>
          {data &&
            data.map((pokemon, index) => (
              <Card
                name={pokemon.name}
                id={pokemon.name}
                key={index}
                baseStat={pokemon.description && pokemon.description.stats}
                baseExperience={pokemon.description && pokemon.description.base_experience}
              />
            ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export default PokemonsContainer;
