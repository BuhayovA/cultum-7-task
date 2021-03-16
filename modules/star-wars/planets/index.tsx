import * as React from 'react';
import { PlanetsAPIContextProvider } from '@md-sw-planets/layers/api/planets';
import { PlanetsBLContextProvider } from '@md-sw-planets/layers/business';
import { PlanetsPresentation } from '@md-sw-planets/layers/presentation';

const PlanetsContainer = () => (
  <PlanetsAPIContextProvider>
    <PlanetsBLContextProvider>
      <PlanetsPresentation />
    </PlanetsBLContextProvider>
  </PlanetsAPIContextProvider>
);

export { PlanetsContainer };
