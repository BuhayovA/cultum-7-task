import * as React from 'react';
// context
import { PokemonsAPIContext } from '@md-star-wars/pokemons/layers/api';
// types
import { PokemonsRespons } from '../../../../../store/modules/pokemons';

interface Context {
  pokemonsList: PokemonsRespons[];
}

const PokemonsBLContext = React.createContext<Context>({
  pokemonsList: []
});

// TODO: fpr what purpose BL context????

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
