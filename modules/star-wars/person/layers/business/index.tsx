import * as React from 'react';
// context
import { PersonAPIContext } from '@md-sw-person/layers/api/person';

interface PersonInfo {
  label: string;
  value: string;
}

interface Context {
  personInfo: PersonInfo[];
}

const PersonBLContext = React.createContext<Context>({
  personInfo: []
});

const PersonBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { person } = React.useContext(PersonAPIContext);

  const personInfo = React.useMemo<PersonInfo[]>(() => {
    if (!person) {
      return [];
    }

    return [
      { label: 'Gender', value: person.gender ?? 'N/A' },
      { label: 'Hair Color', value: person.hairColor ?? 'N/A' },
      { label: 'Eye Color', value: person.eyeColor ?? 'N/A' },
      { label: 'Birth Year', value: person.birthYear ?? 'N/A' }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof person === 'undefined']);

  return (
    <PersonBLContext.Provider
      value={{
        personInfo
      }}
    >
      {children}
    </PersonBLContext.Provider>
  );
};

export { PersonBLContextProvider, PersonBLContext };
