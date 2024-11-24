import { type TFunction } from 'i18next';
import { toast } from 'react-toastify';


import { useLocalStorage } from '~hooks/index';
import { useAppStorage } from '~store/useStore';
import { LoginDataProps } from './Login';
import { sendRequest } from '~lib/utils';
import { DataProps } from '~hooks/useLocalStorage';
import { APIS } from '~constants/apis';

interface Token {
  access: string;
  refresh: string;
}

export const getUserValidation = (t: TFunction, data: LoginDataProps) => {
  const { updateUserData } = useLocalStorage();
  const { doingRequest, requestFinalized } = useAppStorage.getState();
  doingRequest();
  sendRequest<Token>({
    url: APIS.AUTH_LOGIN,
    method: 'post',
    type: 'public',
    data,
    thenFunction: (res) => {
      if (res.status === 200) {
        updateUserData(res.data);
        sendRequest<DataProps>({
          url: APIS.CORE_USER,
          thenFunction: async (res) => {
            if (res.status === 200) {
              const newUserData = res.data;
              updateUserData(newUserData);
              requestFinalized();
            }
          },
          catchFunction: ({ detail }) => {
            requestFinalized();
            toast.error(t(`toasts.${detail}`));
          }
        });
      }
    },
    catchFunction: ({ detail }) => {
      requestFinalized();
      toast.error(t(`toasts.${detail}`));
    }
  });
};