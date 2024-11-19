import type { ErrorType } from '~store/useStore';

export interface AppStorage {
  isDoingRequest: boolean;
  errorRequest: {
    code: string;
    detail: string;
    [key: string]: unkown;
  } | null;
  doingRequest: () => void;
  requestFinalized: () => void;
  saveUserError: (error: ErrorType) => void;
  saveServerError: () => void;
  cleanError: () => void;
}
