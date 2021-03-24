import * as React from 'react';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton } from './views';
// view components
import { PokemonLink } from '../pokemon-link';

interface Props {
  id: string;
  name: string;
}

const Card: React.FC<Props> = ({ id, name }) => (
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
  </CardWrapper>
);

export { Card };
