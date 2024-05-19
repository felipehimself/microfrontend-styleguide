import type { BrandVariants, Theme } from '@fluentui/react-components';
import { createDarkTheme, createLightTheme } from '@fluentui/react-components';

const myNewTheme: BrandVariants = {
  10: '#050205',
  20: '#211220',
  30: '#391A38',
  40: '#4C214C',
  50: '#602660',
  60: '#752C75',
  70: '#8A328B',
  80: '#994199',
  90: '#A354A3',
  100: '#AE66AC',
  110: '#B878B6',
  120: '#C289C0',
  130: '#CC9BC9',
  140: '#D5ADD3',
  150: '#DFBFDD',
  160: '#E8D1E6',
};

export const lightTheme: Theme = {
  ...createLightTheme(myNewTheme),
};

export const darkTheme: Theme = {
  ...createDarkTheme(myNewTheme),
};
