import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { omit } from 'lodash';

import { type ApisAvailable } from '~constants/index';
import { useLocalStorage } from '~hooks/index';
import { type ErrorType, useAppStorage } from '~store/useStore';
import { cleanObject } from '~lib/utils';

export interface RequestParams {
  length?: number;
  page?: number;
  [key: string]: unknown;
}
export interface ErrorDetail {
  detail: string;
}
interface CatchError {
  response: { data: ErrorType };
}
interface SendRequestProps<T> {
  url: ApisAvailable;
  method?: 'get' | 'post' | 'put' | 'patch' | 'delete';
  data?: object;
  params?: RequestParams;
  isDatatable?: boolean;
  thenFunction: (response: AxiosResponse<T>) => void;
  catchFunction?: (error: ErrorDetail) => void;
  finallyFunction?: () => void;
  type?: 'private' | 'public' | 'aws';
  extraConfig?: Record<string, string>;
}

const sendRequest = async <T>({
  url,
  method = 'get',
  data = {},
  params = {},
  isDatatable = false,
  extraConfig = {},
  thenFunction,
  catchFunction,
  type = 'private'
}: SendRequestProps<T>) => {
  const { userAccess } = useLocalStorage();

  const { doingRequest, requestFinalized, saveUserError } = useAppStorage.getState();
  const token = {
    private: `Bearer ${userAccess}`,
    public: `Token ${import.meta.env.VITE_PUBLIC_TOKEN}`,
    aws: undefined
  }[type];

  type ModeKey = 'development' | 'test' | 'production';
  const mode = {
    development: import.meta.env.VITE_BACKEND_DEV_BASE_URL,
    test: import.meta.env.VITE_BACKEND_TEST_BASE_URL,
    production: import.meta.env.VITE_BACKEND_PROD_BASE_URL
  };

  const baseURL = mode[import.meta.env.MODE as ModeKey];

  let finalParams: RequestParams = params;
  if (isDatatable) {
    const length = params.length ?? 0;
    const page = params.page ?? 0;

    finalParams = omit(
      {
        format: 'datatables',
        length: params.length,
        start: length * page || 0,
        ...params
      },
      ['page']
    );
  }

  const config: AxiosRequestConfig = cleanObject({
    baseURL,
    url,
    method,
    data,
    params: finalParams,
    headers: cleanObject({
      Authorization: token
    }),
    ...extraConfig
  });
  doingRequest();
  axios(config)
    .then((res: AxiosResponse<T, unknown>) => {
      thenFunction(res);
      requestFinalized();
    })
    .catch((error: unknown) => {
      requestFinalized();
      const axiosError = error as CatchError;
      catchFunction && catchFunction(axiosError?.response?.data);
      saveUserError(axiosError?.response?.data);
    });
};

export default sendRequest;