import * as React from 'react';
// views
import { InfoName, InfoValue, InfoWrapper } from './views';

interface Props {
  label: string;
  value: React.ReactNode;
}

const PlanetInfo: React.FC<Props> = ({ label, value }) => (
  <InfoWrapper>
    <InfoName>{label}:</InfoName>
    <InfoValue>{value}</InfoValue>
  </InfoWrapper>
);

export { PlanetInfo };
