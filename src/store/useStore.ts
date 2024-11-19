import { create } from 'zustand';

import { AppStorage } from '~types/StoreTypes';

export interface ErrorType {
  detail: string;
  data: { detail: string };
  Error: string;
  code: string;
}

export const useAppStorage = create<AppStorage>()((set) => ({
  isDoingRequest: false,
  errorRequest: null,
  doingRequest: () => set({ isDoingRequest: true }),
  requestFinalized: () => set({ isDoingRequest: false }),
  saveUserError: (error: ErrorType) => {
    let errorToDisplay = {
      code: 'unknownError',
      detail: 'request_error'
    };

    if (error?.detail || error?.data?.detail) {
      errorToDisplay = error;
    } else if (error?.Error) {
      errorToDisplay = { code: 'bhError', detail: error?.Error };
    }

    set({ errorRequest: errorToDisplay });
  },
  saveServerError: () =>
    set({
      errorRequest: {
        code: 'serverError',
        detail: 'server_error'
      }
    }),
  cleanError: () => set({ errorRequest: null })
}));
