import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { APIS } from "~constants/apis";

import { PaginatedParams, Registries } from "~types/CommonTypes";
import { ListVehiclesResponse } from "./listCarsTypes.d"
import { TFunction } from "i18next";
import { sendRequest } from "~lib/utils";



interface ListVehicles {
  data: ListVehiclesResponse[];
  recordsFiltered: number;
}

interface RequestProps {
  params: PaginatedParams;
  setVehicles: Dispatch<SetStateAction<Registries<ListVehiclesResponse>>>;
}

export const listVehiclesRequest = ({ params, setVehicles }: RequestProps) => {
  sendRequest<ListVehicles>({
    url: APIS.LIST_VEHICLES,
    method: "get",
    params,
    isDatatable: true,
    thenFunction: (res) => {
      if (res.status === 200) {
        setVehicles({
          data: res.data.data,
          isSearching: false,
          totalCount: res.data.recordsFiltered,
        });
      }
    },
    catchFunction: (error) => {
      setVehicles({ data: [], totalCount: 0, isSearching: false });
      const errorString = Object.entries(error)
        .map(([key, messages]) => `${key}: ${messages.join(", ")}`)
        .join("; ");
      toast.error(errorString);
    },
  });
};
