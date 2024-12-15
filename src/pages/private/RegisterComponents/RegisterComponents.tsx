import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Separator } from "~components/ui/separator";
import { useAppStorage } from "~store/useStore";
import {
  registerComponentsInputs,
  RegisterComponentsSchema,
} from "./RegisterComponentsData";
import { Form } from "~components/ui/form";
import InputHandler from "~components/ui/input-handler";

type FormData = z.infer<typeof RegisterComponentsSchema>;

const RegisterComponents = () => {
  const { t } = useTranslation();
  const { isDoingRequest } = useAppStorage.getState();
  const { state: vehicle } = useLocation();
  const form = useForm<FormData>({
    resolver: zodResolver(RegisterComponentsSchema),
    defaultValues: {
      issueDate: undefined,
      enrollmentDate: undefined,
      transitAuthority: "",
      accessories: undefined,
      doorsNumber: undefined,
      kilometric: undefined,
      transmissionType: undefined,
      engineType: undefined,
      horsePower: undefined,
      brakeSystem: undefined,
    },
  });

  const renderFields = (blockName: string) =>
    registerComponentsInputs()
      .filter((input) => input.block === blockName)
      .map((input) => (
        <InputHandler {...input} key={input.id} control={form.control} />
      ));

  const onSubmitRegisterComponents = (
    data: z.infer<typeof RegisterComponentsSchema>
  ) => {};

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitRegisterComponents)}>
          {/* PropertyCard inputs */}
          <Separator
            title={t("labels.register_comp_pc")}
            subtitle={t("labels.register_comp_pc_subtitle")}
          />
          <div className="mt-3 flex items-center gap-4">{renderFields("propertyCard")}</div>
          {/* Accessories inputs */}
          <Separator
            title={t("labels.register_comp_accessories")}
            subtitle={t("labels.register_comp_accessories_subtitle")}
          />
          <div className="mt-5 flex items-center gap-4">{renderFields("accessories")}</div>
          {/* Engine inputs */}
          <Separator
            title={t("labels.register_comp_engine")}
            subtitle={t("labels.register_comp_engine_subtitle")}
          />
          <div className="mt-5 flex items-center gap-10">{renderFields("engine")}</div>
        </form>
      </Form>
    </>
  );
};

export default RegisterComponents;
