import { type TFunction } from "i18next";
import { toast } from "react-toastify";

import { useAppStorage } from "~store/useStore";
import { sendRequest } from "~lib/utils";
import { APIS } from "~constants/apis";

interface AzureCode {
  azure_request_uuid: string;
}
interface AzurePCResponse {
  name: string;
}
interface ValidatePCProps {}

export const validatePCRequest = (
  t: TFunction,
  data: ValidatePCProps,
  onSuccess = () => {}
) => {
  const { doingRequest } = useAppStorage.getState();
  doingRequest();
  sendRequest<AzureCode>({
    url: APIS.LOAD_PC,
    method: "post",
    data,
    thenFunction: (res) => {
      if (res.status === 200) {
        toast.success(t("labels.pc_loaded_completed"));
        setTimeout(() => {
          checkAzureRequest(t, res.data.azure_request_uuid, onSuccess);
        }, 5000);
      }
    },
    catchFunction: ({ detail }) => {
      toast.error(detail);
    },
  });
};

export const checkAzureRequest = (
  t,
  azure_request_uuid: string,
  onSuccess = () => {}
) => {
  const { doingRequest, requestFinalized } = useAppStorage.getState();
  doingRequest();
  sendRequest<AzurePCResponse>({
    url: APIS.CHECK_PC_AZURE,
    method: "get",
    params: { azure_request_uuid: azure_request_uuid },
    thenFunction: (res) => {
      if (res.status === 200) {
        toast.success(t(res.data));
        onSuccess();
        requestFinalized();
      }
    },
    catchFunction: ({ detail }) => {
      toast.error(detail);
    },
  });
};
