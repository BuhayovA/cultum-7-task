import * as React from 'react';
// libs
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// mock
import {
  getPokemonsDescriptionThunkCreator,
  InitialState as DescriptionsState
} from 'store/modules/pokemons/description';
import { RootStore } from 'store';
// helpers
import { ThunkDispatch } from 'store/helpers';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { PokemonLink } from '../pokemon-link';
import DescriptionSection from '@md-star-wars/pokemons/components/pokemon-description-section';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton } from './views';
import { clientError } from '@md-shared/services/api/helpers';

interface Props {
  id: string;
  name: string;
  baseStat: number[];
  baseExperience: number;
}

const Card: React.FC<Props> = ({ id, name, baseStat, baseExperience }) => {
  // hooks
  const dispatch = useDispatch<ThunkDispatch>();

  const { descriptions } = useSelector<RootStore, DescriptionsState>(({ pokemons }) => pokemons.descriptions);

  useEffect(() => {
    dispatch(getPokemonsDescriptionThunkCreator(name));
  }, [dispatch, name]);

  // search for the desired element by name
  const pokemon = descriptions && descriptions.find((i) => i.name === name);

  return (
    <CardWrapper key={id}>
      <CardImgWrapper>
        <CardImg src={'/static/images/007.png'} alt={`${name}-${id}`} />
      </CardImgWrapper>
      <CardFooter>
        <PokemonLink pId={id}>
          <CardFooterTitle>{name}</CardFooterTitle>
        </PokemonLink>
        <PokemonLink pId={id}>
          <ViewButton>Details</ViewButton>
        </PokemonLink>
      </CardFooter>
      <ContentLoader
        isLoading={pokemon?.loading ? pokemon.loading : false}
        position='relative'
        error={pokemon?.error ? clientError(pokemon.error) : undefined}
      >
        <DescriptionSection title='Descriptions' content={baseExperience} subTitle='Base Experience' />
        {baseStat?.map((stat, index) => (
          <DescriptionSection key={index} content={stat} subTitle='Base Stat' />
        ))}
      </ContentLoader>
    </CardWrapper>
  );
};

export { Card };
