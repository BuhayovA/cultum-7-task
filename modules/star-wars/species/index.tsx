import React, { useEffect } from 'react';
import { SpicePresentation } from '@md-star-wars/species/layers/presentation';
import { SpeciesAPIContextProvider } from '@md-star-wars/species/layers/api';
import { SpeciesBLContextProvider } from '@md-star-wars/species/layers/businness';
import { useRouter } from 'next/router';

const SpeciesContainer = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/species', undefined, { shallow: true });
  }, []);
  return (
    <SpeciesAPIContextProvider>
      <SpeciesBLContextProvider>
        <SpicePresentation />
      </SpeciesBLContextProvider>
    </SpeciesAPIContextProvider>
  );
};
export default SpeciesContainer;
