import * as React from 'react';
// components
import Link from 'next/link';

interface Props {
  pId: string;
}

const StarshipLink: React.FC<Props> = ({ pId, children }) => (
  <Link href='/starships/[id]' as={`/starships/${pId}`}>
    <a>{children}</a>
  </Link>
);

export { StarshipLink };
