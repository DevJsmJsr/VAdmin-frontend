import { APIS } from '~constants/apis';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CSS_COLORS = {
  black: 'var(--black)',
  gray: 'var(--gray)',
  'gray-light': 'var(--gray-light)',
  'blue-light': 'var(--blue-light)',
  'blue-dark': 'var(--blue-dark)',
  'green-light': 'var(--green-light)',
  'green-dark': 'var(--green-dark)',
  'red-light': 'var(--red-light)',
  'red-primary': 'var(--red-primary)',
  'red-dark': 'var(--red-dark)',
  white: 'var(--white)',
  'yellow-light': 'var(--yellow-light)',
  'yellow-dark': 'var(--yellow-dark)',
  'app-primary-color': 'var(--app-primary-color)',
  'app-secondary-color': 'var(--app-secondary-color)',
  'app-tertiary-color': 'var(--app-tertiary-color)',
  'app-disabled-color': 'var(--app-disabled-color)'
} as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DATE_FORMATS = {
  DAY: 'DD/MM/YYYY',
  HOUR: 'h:mm A',
  FULL_DATE: 'DD/MM/YYYY hh:mm A'
} as const;

export const REMOVE_FILTER_SELECT = {
  label: 'components.input_select_remove_filter',
  value: ''
};

export * from '~constants/apis';
export * from '~constants/appRoutes';

export type Colors = (typeof CSS_COLORS)[keyof typeof CSS_COLORS];
export type Dates = (typeof DATE_FORMATS)[keyof typeof DATE_FORMATS];
export type ApisAvailable = (typeof APIS)[keyof typeof APIS];
