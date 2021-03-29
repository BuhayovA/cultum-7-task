import * as React from 'react';
// types
import { Stat } from '@md-shared/types/pokemon';
// view components
import { PokemonLink } from '../pokemon-link';
import DescriptionSection from '@md-star-wars/pokemons/components/pokemon-description-section';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton } from './views';

interface Props {
  id: string;
  name: string;
  baseExperience: number | undefined;
  baseStat: Stat[] | undefined;
}

const Card: React.FC<Props> = ({ id, name, baseExperience, baseStat }) => (
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
    <DescriptionSection title='Descriptions' content={baseExperience} subTitle='Base Experience: ' />
    {baseStat &&
      baseStat.map((i, index) => <DescriptionSection key={index} content={i.base_stat} subTitle='Base Stat: ' />)}
  </CardWrapper>
);

export { Card };
