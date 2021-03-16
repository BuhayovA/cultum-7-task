import * as React from 'react';
// components
import Link from 'next/link';

interface Props {
  pId: string;
}

const PlanetLink: React.FC<Props> = ({ pId, children }) => (
  <Link href='/planets/[id]' as={`/planets/${pId}`}>
    <a>{children}</a>
  </Link>
);

export { PlanetLink };
