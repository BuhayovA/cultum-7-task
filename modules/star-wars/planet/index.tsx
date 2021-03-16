import * as React from 'react';
import { PlanetPresentation } from '@md-sw-planet/layers/presentation';
import { PlanetAPIContextProvider } from '@md-sw-planet/layers/api/planet';
import { PlanetBLContextProvider } from '@md-sw-planet/layers/business';

const PlanetContainer = () => (
  <PlanetAPIContextProvider>
    <PlanetBLContextProvider>
      <PlanetPresentation />
    </PlanetBLContextProvider>
  </PlanetAPIContextProvider>
);

export { PlanetContainer };
