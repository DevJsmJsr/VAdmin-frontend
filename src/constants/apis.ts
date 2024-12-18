export const APIS = {
  AUTH_LOGIN: '/api/token/',
  CORE_USER: '/api/core/users/',
  LOAD_PC: '/api/core/read-property-card/',
  CHECK_PC_AZURE: '/api/core/check-property-card/',
  LIST_VEHICLES: '/api/core/vehicle/',
  REGISTER_COMPONENTS: (pk:number)=>`/api/core/register-vehicle-components/${pk}/`,
} as const;
