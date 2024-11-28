import { type TFunction } from "i18next";
import { toast } from "react-toastify";

import { useAppStorage } from "~store/useStore";
import { sendRequest } from "~lib/utils";
import { APIS } from "~constants/apis";

interface AzureCode {
  azure_request_uuid: string;
}
interface AzurePCResponse {
  message: string;
  number_plate: string;
  person_name: string;
}
interface ValidatePCProps {}

const USER_EXISTS = "A user with that username already exists.";
export const validatePCRequest = (
  t: TFunction,
  data: ValidatePCProps,
  onSuccess = () => {}
) => {
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
  t: (arg0: string) => string,
  azure_request_uuid: string,
  onSuccess = () => {}
) => {
  sendRequest<AzurePCResponse>({
    url: APIS.CHECK_PC_AZURE,
    method: "get",
    params: { azure_request_uuid: azure_request_uuid },
    thenFunction: (res) => {
      if (res.status === 200) {
        toast.success(t(res.data.message));
        onSuccess();
      }
    },
    catchFunction: (error) => {
      debugger;
      if (error?.username?.[0] === USER_EXISTS) {
        toast.success(t(USER_EXISTS));
        onSuccess();
        return
      }
      const errorString = Object.entries(error)
        .map(([key, messages]) => `${key}: ${messages.join(", ")}`)
        .join("; ");
      toast.error(errorString);
    },
  });
};
