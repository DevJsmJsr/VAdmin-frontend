import { type TFunction } from 'i18next';
import { toast } from 'react-toastify';


import { useLocalStorage } from '~hooks/index';
import { useAppStorage } from '~store/useStore';
import { LoginDataProps } from './Login';
import { sendRequest } from '~lib/index';

interface Token {
  access: string;
  refresh: string;
}

export const getUserValidation = (data: LoginDataProps) => {
  const { updateUserData } = useLocalStorage();
  const { doingRequest, requestFinalized } = useAppStorage.getState();
  doingRequest();
  sendRequest<Token>({
    url: '/api/token/',
    method: 'post',
    type: 'public',
    data,
    thenFunction: (res) => {
      if (res.status === 200) {
        updateUserData(res.data);
        requestFinalized();
      }
    },
    catchFunction: ({ detail }) => {
      requestFinalized();
      toast.error(t(`toasts.${detail}`));
    }
  });
};