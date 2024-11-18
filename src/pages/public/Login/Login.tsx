import React from "react";
import { Link } from "react-router-dom";
import { Button } from "~components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~components/ui/card";
import { Input } from "~components/ui/input";
import { Label } from "~components/ui/label";
import AppLogoInverse from "~assets/vadmin_black.svg";
import LoginBackground from "~assets/login_background.svg";
import { useTranslation } from "react-i18next";
import InputHandler from "~components/ui/input-handler";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginInputs, LoginSchema } from "./LoginData";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~components/ui/form";

const Login = () => {
  const { t } = useTranslation();
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues:{
      email:"",
      password:""
    }
  });
  
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${LoginBackground})` }}
    >
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">
            <img
              src={AppLogoInverse}
              alt="user avatar"
              className="w-[12rem] h-24"
            />
          </CardTitle>
          <CardDescription>{t("labels.login_parragraph")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                {loginInputs().map((input) => (
                    <InputHandler
                      {...input}
                      key={input.id}
                      control={form.control}
                    />
                  ))}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Link
                      to="#"
                      className="ml-auto inline-block text-sm underline"
                    >
                      {t("labels.forgot_password")}
                    </Link>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  {t("labels.send")}
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            {t("labels.dont_have_account")}{" "}
            <Link to="#" className="underline">
              {t("labels.sign_up")}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
