import { TFunction } from "i18next";
import { toast } from "react-toastify";
import { APIS } from "~constants/apis";
import { sendRequest } from "~lib/utils";

interface RegisterComponentsProps {

}

interface RegisterComponents {

}

export const registerComponentsRequest = (
  t: TFunction,
  data: RegisterComponentsProps
) => {  
  sendRequest<RegisterComponents>({
    url: APIS.REGISTER_COMPONENTS(data.pk),
    method: "patch",
    data,
    thenFunction: (res) => {
      if (res.status === 200) {
        toast.success(t("labels.initial_scan_completed"));
      }
    },
    catchFunction: (detail) => {
      toast.error(detail);
    },
  });
};