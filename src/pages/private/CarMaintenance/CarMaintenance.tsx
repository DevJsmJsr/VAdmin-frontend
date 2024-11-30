import React from "react";
import { z } from "zod";
import { useLocation } from "react-router-dom";
import DataMapper from "~components/custom/DataMapper/DataMapper";
import {
  startMaintenanceFormInputs,
  StartMaintenanceSchema,
  vehicleDataMapper,
} from "./CarMaintenanceData";
import { Form } from "~components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~components/ui/button";
import { useTranslation } from "react-i18next";
import { useAppStorage } from "~store/useStore";
import InputHandler from "~components/ui/input-handler";
import CarSupport from "~assets/car_sopport.png";
import { HistoryIcon } from "lucide-react";
import BasicDialog from "~components/custom/Dialog/BasicDialog/BasicDialog";

type FormData = z.infer<typeof StartMaintenanceSchema>;

const CarMaintenance = () => {
  const { t } = useTranslation();
  const { isDoingRequest } = useAppStorage.getState();

  const { state: carSelected } = useLocation();
  const form = useForm<FormData>({
    resolver: zodResolver(StartMaintenanceSchema),
    defaultValues: {
      maintenanceType: "",
      productName: "",
      productExpirationDate: new Date(),
      productAddedImage: {} as File,
      recommendation: "",
    },
  });

  const onSubmitMaintenance = () => {};

  return (
    <>
      <DataMapper data={vehicleDataMapper({ carSelected })} />
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="col-span-1 border border-gray-300 p-4 rounded-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitMaintenance)}>
              {startMaintenanceFormInputs().map((input) => (
                <InputHandler
                  {...input}
                  key={input.id}
                  control={form.control}
                />
              ))}
              <Button
                isDoingRequest={isDoingRequest}
                type="submit"
                className="w-15"
              >
                {t("labels.load")}
              </Button>
            </form>
          </Form>
        </div>
        <div className="col-span-1">
          <BasicDialog/>
          <div className="flex justify-center items-center">
            <img
              src={CarSupport}
              alt="Imagen de ejemplo"
              className="w-[30rem] h-30 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarMaintenance;
