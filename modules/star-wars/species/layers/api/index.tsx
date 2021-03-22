import * as React from 'react';
import { Kind } from '@md-shared/types/kind';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpeciesThunkCreator } from '../../../../../store/modules/species';
import { RootStore } from '../../../../../store';

interface Context {
  species: Kind[];
  isLoading: boolean;
}

const SpeciesAPIContext = React.createContext<Context>({
  species: [],
  isLoading: false
});

const SpeciesAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpeciesThunkCreator());
  }, []);
  const species = useSelector<RootStore>((state) => state.species);
  return (
    <SpeciesAPIContext.Provider
      value={{
        species: species.data,
        isLoading: species.loading
      }}
    >
      {children}
    </SpeciesAPIContext.Provider>
  );
};

export { SpeciesAPIContextProvider, SpeciesAPIContext };
