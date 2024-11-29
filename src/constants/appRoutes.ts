const publicRoutes = {
  LOGIN: '/login',
  REGISTER: '/register'
};

const privateRoutes = {
  PLATFORM: '/platform',
  SCAN_CARD: '/platform/scan-card',
  LIST_CARS: '/platform/list-cars',
  HOME: '/home',
};

export const ROUTES = {
  ROOT: '/',
  ERROR: '/404',
  ...publicRoutes,
  ...privateRoutes
} as const;
