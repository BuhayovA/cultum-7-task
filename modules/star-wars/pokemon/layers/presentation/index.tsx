import * as React from 'react';
// libs
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// mock
import { RootStore } from 'store';
import { getPokemonThunkCreator, InitialState as PokemonState } from 'store/modules/pokemon';
// helpers
import { clientError } from '@md-shared/services/api/helpers';
import { ThunkDispatch } from 'store/helpers';
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

interface PokemonList {
  label: string;
  value: string | number;
}

const PokemonPresentation = () => {
  const { query } = useRouter();

  const dispatch = useDispatch<ThunkDispatch>();
  // take data from the redux-state.
  const { data, loading, error } = useSelector<RootStore, PokemonState>(({ pokemon }) => pokemon);

  // make api call here
  useEffect(() => {
    dispatch(getPokemonThunkCreator(query.id as string));
  }, [query.id, dispatch]);

  const pokemonInfo = React.useMemo<PokemonList[]>(() => {
    if (!data) {
      return [];
    }
    return [
      {
        label: 'Weight',
        value: data.weight ?? 'N/A'
      },
      {
        label: 'Height',
        value: data.height ?? 'N/A'
      },
      {
        label: 'Name',
        value: data.name ?? 'N/A'
      },
      {
        label: 'Default pokemon?',
        value: `${data.is_default}` ?? 'N/A'
      }
    ];
  }, [data]);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={loading} error={error ? clientError(error) : undefined}>
          <PokemonImgContainer>
            <img src='/static/images/planet.png' alt='planet' />
          </PokemonImgContainer>
          <PokemonDetailsContainer>
            {data && <PokemonName>{data.name}</PokemonName>}
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
