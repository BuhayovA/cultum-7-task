import * as React from 'react';
// context
import { PlanetAPIContext } from '@md-sw-planet/layers/api/planet';

interface PlanetInfo {
  label: string;
  value: string | number;
}

interface Context {
  planetInfo: PlanetInfo[];
}

const PlanetBLContext = React.createContext<Context>({
  planetInfo: []
});

const PlanetBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { planet } = React.useContext(PlanetAPIContext);

  const planetInfo = React.useMemo<PlanetInfo[]>(() => {
    if (!planet) {
      return [];
    }

    return [
      { label: 'Diameter', value: planet.diameter ?? 'N/A' },
      { label: 'Gravity', value: planet.gravity ?? 'N/A' },
      { label: 'Orbital Period', value: planet.orbitalPeriod ?? 'N/A' },
      { label: 'Population', value: planet.population ?? 'N/A' }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof planet === 'undefined']);

  return (
    <PlanetBLContext.Provider
      value={{
        planetInfo
      }}
    >
      {children}
    </PlanetBLContext.Provider>
  );
};

export { PlanetBLContextProvider, PlanetBLContext };
