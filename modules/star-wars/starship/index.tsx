import * as React from 'react';
import { StarshipPresentation } from '@md-sw-starship/layers/presentation';
import { StarshipAPIContextProvider } from '@md-sw-starship/layers/api/starship';
import { StarshipBLContextProvider } from '@md-sw-starship/layers/business';

const StarshipContainer = () => (
  <StarshipAPIContextProvider>
    <StarshipBLContextProvider>
      <StarshipPresentation />
    </StarshipBLContextProvider>
  </StarshipAPIContextProvider>
);

export { StarshipContainer };
