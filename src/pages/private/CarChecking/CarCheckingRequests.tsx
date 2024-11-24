import { type TFunction } from 'i18next';
import { toast } from 'react-toastify';

import { useAppStorage } from '~store/useStore';
import { sendRequest } from '~lib/utils';
import { APIS } from '~constants/apis';


interface PropertyCard {
  name: string;
  identification: string;
}

interface ValidatePCProps {
  
}

export const validatePCRequest = (t: TFunction, data: ValidatePCProps) => {
  const { doingRequest, requestFinalized } = useAppStorage.getState();
  doingRequest();
  sendRequest<PropertyCard>({
    url: APIS.LOAD_PC,
    method: 'post',
    data,
    thenFunction: (res) => {
      if (res.status === 200) {
        toast.success(t('labels.pc_loaded_completed'));
        requestFinalized()
      }
    },
    catchFunction: ({ detail }) => {
      toast.error(detail);
    }
  });
};