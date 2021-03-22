import * as React from 'react';
//context
import { SpeciesAPIContext } from '@md-star-wars/species/layers/api';
// types
import { Kind } from '@md-shared/types/kind';

interface Context {
  speciesList: Kind[];
}

const SpeciesBLContext = React.createContext<Context>({
  speciesList: []
});

const SpeciesBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { species } = React.useContext(SpeciesAPIContext);
  return (
    <SpeciesBLContext.Provider
      value={{
        speciesList: species
      }}
    >
      {children}
    </SpeciesBLContext.Provider>
  );
};

export { SpeciesBLContextProvider, SpeciesBLContext };
