import * as React from 'react';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton } from './views';
// view components
import { KindLink } from '../kind-link';

interface Props {
  id: string;
  name: string;
}

const Card: React.FC<Props> = ({ id, name }) => (
  <CardWrapper key={id}>
    <CardImgWrapper>
      <CardImg src={'/static/images/Ben-Kenobi.jpg'} alt={`${name}-${id}`} />
    </CardImgWrapper>
    <CardFooter>
      <KindLink pId={id}>
        <CardFooterTitle>{name}</CardFooterTitle>
      </KindLink>
      <KindLink pId={id}>
        <ViewButton>Details</ViewButton>
      </KindLink>
    </CardFooter>
  </CardWrapper>
);

export { Card };
