import React, { useEffect, useState } from "react";
import { DataTable } from "~components/custom/DataTable/datatable";
import { listVehicleColumns } from "./ListCarsData";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppStorage } from "~store/useStore";
import { listVehiclesRequest } from "./ListCarsRequest";
import { Registries } from "~types/CommonTypes";
import { ListVehiclesResponse } from "./listCarsTypes";
import BasicDialog from "~components/custom/Dialog/BasicDialog/BasicDialog";

const ListCars = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [params, setParams] = useState({ length: 5, page: 0 });
  const [vehicles, setVehicles] = useState<Registries<ListVehiclesResponse>>({
    data: [],
    isSearching: false,
    totalCount: 0,
  });

  const obtainVehicles = () => {
    listVehiclesRequest({ t, params, setVehicles });
  };

  useEffect(() => {
    obtainVehicles();
  }, []);

  return (
    <>
    <DataTable columns={listVehicleColumns({navigate})} data={vehicles.data} />
    </>
  );
};

export default ListCars;
