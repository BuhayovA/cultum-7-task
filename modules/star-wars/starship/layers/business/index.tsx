import * as React from 'react';
// context
import { StarshipAPIContext } from '@md-sw-starship/layers/api/starship';

interface StarshipInfo {
  label: string;
  value: string | number;
}

interface Context {
  starshipInfo: StarshipInfo[];
}

const StarshipBLContext = React.createContext<Context>({
  starshipInfo: []
});

const StarshipBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { starship } = React.useContext(StarshipAPIContext);

  const starshipInfo = React.useMemo<StarshipInfo[]>(() => {
    if (!starship) {
      return [];
    }

    return [
      { label: 'Name', value: starship.name ?? 'N/A' },
      { label: 'Model', value: starship.model ?? 'N/A' },
      { label: 'Cost In Credits', value: starship.costInCredits ?? 'N/A' },
      { label: 'Hyperdrive Rating', value: starship.hyperdriveRating ?? 'N/A' },
      { label: 'Passengers', value: starship.passengers ?? 'N/A' }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof starship === 'undefined']);

  return (
    <StarshipBLContext.Provider
      value={{
        starshipInfo
      }}
    >
      {children}
    </StarshipBLContext.Provider>
  );
};

export { StarshipBLContextProvider, StarshipBLContext };
