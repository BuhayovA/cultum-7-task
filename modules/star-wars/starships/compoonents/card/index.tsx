import * as React from 'react';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton } from './views';
// view components
import { StarshipLink } from '../starship-link';

interface Props {
  id: string;
  name: string;
}

const Card: React.FC<Props> = ({ id, name }) => (
  <CardWrapper key={id}>
    <CardImgWrapper>
      <CardImg src={'/static/images/starship.jpg'} alt={`${name}-${id}`} />
    </CardImgWrapper>
    <CardFooter>
      <StarshipLink pId={id}>
        <CardFooterTitle>{name}</CardFooterTitle>
      </StarshipLink>
      <StarshipLink pId={id}>
        <ViewButton>Details</ViewButton>
      </StarshipLink>
    </CardFooter>
  </CardWrapper>
);

export { Card };
