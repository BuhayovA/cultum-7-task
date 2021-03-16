import * as React from 'react';
import debounce from 'lodash/debounce';

export enum EScreenSizes {
  DESKTOP = 'DESKTOP',
  TABLET = 'TABLET',
  MOBILE = 'MOBILE'
}

export const DEVICE_WIDTH = {
  [EScreenSizes.MOBILE]: 768,
  [EScreenSizes.TABLET]: 1260
};

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = React.useState<EScreenSizes>(EScreenSizes.DESKTOP);

  const getDeviceType = (): EScreenSizes => {
    const wind: Window = window;
    const docu: HTMLElement = document.documentElement;
    const body: HTMLElement = document.getElementsByTagName('body')[0] || ({ clientWidth: 0 } as HTMLElement);

    const width = wind.innerWidth || docu.clientWidth || body.clientWidth;

    if (width < DEVICE_WIDTH[EScreenSizes.MOBILE]) return EScreenSizes.MOBILE;
    if (width >= DEVICE_WIDTH[EScreenSizes.MOBILE] && width < DEVICE_WIDTH[EScreenSizes.TABLET]) {
      return EScreenSizes.TABLET;
    }

    return EScreenSizes.DESKTOP;
  };

  const handleResize = debounce(() => {
    const type = getDeviceType();

    if (deviceType !== type) setDeviceType(type);
  }, 150);

  // effects
  React.useEffect(
    () => {
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    deviceType
  };
};
