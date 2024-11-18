import AES from 'crypto-js/aes';
import UTF8 from 'crypto-js/enc-utf8';

export interface DataProps {
  access: string;
  email: string;
  first_name: string;
  last_name: string;
  permissions: string[];
  pk: number;
  refresh: string;
  tac: unknown;
  username: string;
  is_superuser: boolean;
}
const useLocalStorage = () => {
  const app = 'vadmin_web_app';

  const encryptUserData = (data: Partial<DataProps>) => {
    const dataEncrypted = AES.encrypt(
      JSON.stringify(data),
      import.meta.env.VITE_ENCRYPTION_KEY
    ).toString();
    return dataEncrypted;
  };

  const decryptUserData = (data: string): Partial<DataProps> => {
    let userDataDecrypted = {};
    if (data !== null) {
      const bytes = AES.decrypt(data, import.meta.env.VITE_ENCRYPTION_KEY);
      userDataDecrypted = JSON.parse(bytes.toString(UTF8)) as string;
    }
    return userDataDecrypted;
  };

  const userData = decryptUserData(localStorage.getItem(app)!);

  const userPermissions =
    decryptUserData(localStorage.getItem(app)!)?.permissions ?? [];

  const userAccess = decryptUserData(localStorage.getItem(app)!)?.access;

  const recaptcha = localStorage.getItem('recaptcha') ?? '';

  const setRecaptcha = (token: string) => {
    localStorage.setItem('recaptcha', token);
  };

  const removeRecaptcha = () => localStorage.removeItem('recaptcha');

  const updateUserData = (newUserData = {}) => {
    const prevUserData = decryptUserData(localStorage.getItem(app)!) || {};
    const updatedUserData = { ...prevUserData, ...newUserData };
    localStorage.setItem(app, encryptUserData(updatedUserData));
  };

  return {
    userData,
    userAccess,
    userPermissions,
    recaptcha,
    setRecaptcha,
    removeRecaptcha,
    updateUserData
  };
};

export default useLocalStorage;
