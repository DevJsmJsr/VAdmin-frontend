import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "~components/ui/form";

import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Separator } from "~components/ui/separator";
import { useAppStorage } from "~store/useStore";
import {
  accessoriesList,
  registerComponentsInputs,
  RegisterComponentsSchema,
} from "./RegisterComponentsData";
import InputHandler from "~components/ui/input-handler";
import { Button } from "~components/ui/button";
import { registerComponentsRequest } from "./RegisterComponentsRequest";

type FormData = z.infer<typeof RegisterComponentsSchema>;
type Dictionary = { [key: string]: boolean };

const RegisterComponents = () => {
  const { t } = useTranslation();
  const { isDoingRequest } = useAppStorage.getState();
  const { state: vehicle } = useLocation();

  const form = useForm<FormData>({
    resolver: zodResolver(RegisterComponentsSchema),
    defaultValues: {
      issue_date: "",
      enrollment_date: "",
      transit_authority: "",
      doors_number: "",
      kilometric: "",
      accessories: "",
      transmission_type: "",
      engine_type: "",
      horse_power: "",
      brake_system: "",
    },
  });

  const renderFields = (blockName: string) =>
    registerComponentsInputs()
      .filter((input) => input.block === blockName)
      .map((input, index) => (
        <div className={input.className} key={`${index}_${input.id}`}>
          <InputHandler {...input} key={input.id} control={form.control} />
        </div>
      ));

  const onSubmitRegisterComponents = (
    values: z.infer<typeof RegisterComponentsSchema>
  ) => {
    
    const vehicle_accessories: Dictionary = accessoriesList.reduce((acc, key) => {
      acc[key] = values.accessories.includes(key);
      return acc;
    }, {});

    const dataToSend = {
      pk: vehicle.vehicle_id,
      doors_number: values.doors_number,
      kilometric: values.kilometric,
      property_card: {
        pk: vehicle.property_card_id,
        issue_date: values.issue_date,
        enrollment_date: values.enrollment_date,
        transit_authority: values.transit_authority,
      },
      vehicle_engine: {
        transmission: values.transmission_type,
        horse_power: values.horse_power,
        engine_type: values.engine_type,
        brake_system: values.brake_system,
      },
      vehicle_accessories: {
        ...vehicle_accessories,
      },
    };
    registerComponentsRequest(t, dataToSend);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitRegisterComponents)}>
          {/* PropertyCard inputs */}
          <Separator
            title={t("labels.register_comp_pc")}
            subtitle={t("labels.register_comp_pc_subtitle")}
          />
          <div className="mt-3 flex items-center gap-1">
            {renderFields("propertyCard")}
          </div>
          {/* Accessories inputs */}
          <Separator
            title={t("labels.register_comp_accessories")}
            subtitle={t("labels.register_comp_accessories_subtitle")}
          />
          <div className="mt-3 flex flex-wrap gap-1">
            {renderFields("accessories")}
          </div>
          {/* Engine inputs */}
          <Separator
            title={t("labels.register_comp_engine")}
            subtitle={t("labels.register_comp_engine_subtitle")}
          />
          <div className="mt-5 flex items-center gap-1">
            {renderFields("engine")}
          </div>
          <div className="flex">
            <Button
              isDoingRequest={isDoingRequest}
              type="submit"
              className="w-64 mt-10"
            >
              {t("labels.register_components")}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default RegisterComponents;
