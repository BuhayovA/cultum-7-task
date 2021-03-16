import * as React from 'react';
// context
import { PeopleAPIContext } from '@md-sw-people/layers/api/people';
// types
import { GetPerson } from '@md-sw-people/queries/people/types';

type ListItem = Pick<GetPerson, 'id' | 'name'>;

interface Context {
  peopleList: ListItem[];
}

const PeopleBLContext = React.createContext<Context>({
  peopleList: []
});

const PeopleBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { people } = React.useContext(PeopleAPIContext);

  const peopleList = React.useMemo<ListItem[]>(() => {
    return people.map(({ id, name }) => ({
      name,
      id
    }));
  }, [people]);

  return (
    <PeopleBLContext.Provider
      value={{
        peopleList
      }}
    >
      {children}
    </PeopleBLContext.Provider>
  );
};

export { PeopleBLContextProvider, PeopleBLContext };
