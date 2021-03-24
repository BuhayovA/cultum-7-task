import * as React from 'react';
// context
import { PokemonAPIContext } from '@md-star-wars/pokemon/layers/api/pokemon';

interface PokemonInfo {
  label: string;
  value: string | number;
}

interface Context {
  pokemonInfo: PokemonInfo[];
}

const PokemonBLContext = React.createContext<Context>({
  pokemonInfo: []
});

const PokemonBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { pokemon } = React.useContext(PokemonAPIContext);

  const pokemonInfo = React.useMemo<PokemonInfo[]>(() => {
    if (!pokemon) {
      return [];
    }
    return [
      { label: 'Weight', value: pokemon.weight ?? 'N/A' },
      { label: 'Height', value: pokemon.height ?? 'N/A' },
      { label: 'Name', value: pokemon.name ?? 'N/A' },
      { label: 'Default', value: `${pokemon.is_default}` ?? 'N/A' }
    ];
  }, [pokemon]);
  return (
    <PokemonBLContext.Provider
      value={{
        pokemonInfo
      }}
    >
      {children}
    </PokemonBLContext.Provider>
  );
};

export { PokemonBLContextProvider, PokemonBLContext };
