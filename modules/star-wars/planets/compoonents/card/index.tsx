import * as React from 'react';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton } from './views';
// view components
import { PlanetLink } from '../planet-link';

interface Props {
  id: string;
  name: string;
}

const Card: React.FC<Props> = ({ id, name }) => (
  <CardWrapper key={id}>
    <CardImgWrapper>
      <CardImg src={'/static/images/planet.png'} alt={`${name}-${id}`} />
    </CardImgWrapper>
    <CardFooter>
      <PlanetLink pId={id}>
        <CardFooterTitle>{name}</CardFooterTitle>
      </PlanetLink>
      <PlanetLink pId={id}>
        <ViewButton>Details</ViewButton>
      </PlanetLink>
    </CardFooter>
  </CardWrapper>
);

export { Card };
