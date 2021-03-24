import * as React from 'react';
// components
import Link from 'next/link';

interface Props {
  pId: string;
}

const PokemonLink: React.FC<Props> = ({ pId, children }) => (
  <Link href='/pokemons/[id]' as={`/pokemons/${pId}`}>
    <a>{children}</a>
  </Link>
);

export { PokemonLink };
