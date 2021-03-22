import * as React from 'react';
// context
import { PokemonsAPIContext } from '@md-star-wars/pokemons/layers/api';
// types
import { Pokemon } from '@md-shared/types/kind';

interface Context {
  pokemonsList: Pokemon[];
}

const PokemonsBLContext = React.createContext<Context>({
  pokemonsList: []
});

const PokemonsBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { pokemons } = React.useContext(PokemonsAPIContext);
  const pokemonsList = pokemons || [];
  return (
    <PokemonsBLContext.Provider
      value={{
        pokemonsList: pokemonsList
      }}
    >
      {children}
    </PokemonsBLContext.Provider>
  );
};

export { PokemonsBLContextProvider, PokemonsBLContext };
