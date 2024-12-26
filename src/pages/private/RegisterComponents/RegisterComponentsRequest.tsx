import { TFunction } from "i18next";
import { toast } from "react-toastify";
import { APIS } from "~constants/apis";
import { sendRequest } from "~lib/utils";

interface RegisterComponentsProps {
  pk: string;
}

interface RegisterComponents {}

export const registerComponentsRequest = (
  t: TFunction,
  data: RegisterComponentsProps,
  onSuccess: () => void
) => {
  sendRequest<RegisterComponents>({
    url: APIS.REGISTER_COMPONENTS(data.pk),
    method: "patch",
    data,
    thenFunction: (res) => {
      if (res.status === 200) {
        toast.success(t("labels.initial_scan_completed"));
        onSuccess();
      }
    },
    catchFunction: (error) => {
      const errorString = Object.entries(error)
        .map(([key, messages]) => `${key}: ${JSON.stringify(messages)}`)
        .join("; ");
      toast.error(errorString);
    },
  });
};
