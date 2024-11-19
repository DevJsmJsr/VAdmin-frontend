const publicRoutes = {
  LOGIN: '/login',
  REGISTER: '/register'
};

const privateRoutes = {
  PLATFORM: '/platform',
};

export const ROUTES = {
  ROOT: '/',
  ERROR: '/404',
  ...publicRoutes,
  ...privateRoutes
} as const;
