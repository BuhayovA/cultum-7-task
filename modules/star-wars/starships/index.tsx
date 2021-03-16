import * as React from 'react';
import { StarshipsAPIContextProvider } from './layers/api/starships';
import { StarshipsBLContextProvider } from './layers/business';
import { StarshipsPresentation } from './layers/presentation';

const StarshipsContainer = () => (
  <StarshipsAPIContextProvider>
    <StarshipsBLContextProvider>
      <StarshipsPresentation />
    </StarshipsBLContextProvider>
  </StarshipsAPIContextProvider>
);

export { StarshipsContainer };
