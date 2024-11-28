import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "~components/ui/form";
import { useTranslation } from "react-i18next";
import {
  startCheckingFormInputs,
  StartCheckingSchema,
} from "./CarCheckingData";
import InputHandler from "~components/ui/input-handler";
import { Button } from "~components/ui/button";
import { validatePCRequest } from "./CarCheckingRequests";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "~constants/appRoutes";
import { useAppStorage } from "~store/useStore";

type FormData = z.infer<typeof StartCheckingSchema>;

const CarChecking = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isDoingRequest } = useAppStorage.getState();
  const form = useForm<FormData>({
    resolver: zodResolver(StartCheckingSchema),
    defaultValues: {
      propertyCard: {} as File,
    },
  });

  const onSubmitStartChecking = (data: z.infer<typeof StartCheckingSchema>) => {
    let formData = new FormData();
    formData.append("pcFile", data.propertyCard);
    const onSuccess = () => {
      navigate(ROUTES.LIST_CARS);
    };
    validatePCRequest(t, formData, onSuccess);
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitStartChecking)}>
          {startCheckingFormInputs().map((input) => (
            <InputHandler {...input} key={input.id} control={form.control} />
          ))}
          <Button isDoingRequest={isDoingRequest} type="submit" className="w-15">
            {t("labels.load")}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default CarChecking;
