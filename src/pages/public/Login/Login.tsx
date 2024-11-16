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
import AppLogoInverse from '~assets/vadmin_black.svg';
import LoginBackground from '~assets/login_background.svg';
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${LoginBackground})` }}>
      <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">
        <img
            src={AppLogoInverse}
            alt="user avatar"
            className="w-[12rem] h-24"
          />
        </CardTitle>
        <CardDescription>
          {t('labels.login_parragraph')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="juanmecanico@ejemplo.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">{t('labels.password')}</Label>
              <Link to="#" className="ml-auto inline-block text-sm underline">
              {t('labels.forgot_password')}
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
          {t('labels.send')}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
        {t('labels.dont_have_account')}{" "}
          <Link to="#" className="underline">
          {t('labels.sign_up')}
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default Login;
