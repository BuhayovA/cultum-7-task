import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Card } from '@md-sw-people/compoonents/card';
// context
import { PeopleAPIContext } from '@md-sw-people/layers/api/people';
import { PeopleBLContext } from '@md-sw-people/layers/business';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';

const PeoplePresentation = () => {
  const { isLoading, error } = React.useContext(PeopleAPIContext);
  const { peopleList } = React.useContext(PeopleBLContext);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          {peopleList.map((person) => (
            <Card {...person} key={person.id} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { PeoplePresentation };
