import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeLogo from "~assets/car_home.svg";
import { Avatar, AvatarFallback, AvatarImage } from '~components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~components/ui/card';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center justify-center'>
      <Card className="absolute left-[24rem] top-1/4 w-[340px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="flex flex-col">
            <CardTitle className="text-lg text-center">Autos diagnosticados con plan premium.</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <h1 className='text-lg font-bold text-center'>1</h1>
        </CardContent>
      </Card>
      <Card className="absolute left-[28rem] top-[30rem] w-[340px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="flex flex-col">
            <CardTitle className="text-lg text-center">Tarjetas de propiedad escaneadas en la plataforma</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <h1 className='text-lg font-bold text-center'>1</h1>
        </CardContent>
      </Card>
      <Card className="absolute right-[9rem] top-1/4 w-[340px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="flex flex-col">
            <CardTitle className="text-lg text-center">Usuarios registrados en la plataforma.</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <h1 className='text-lg font-bold text-center'>2</h1>
        </CardContent>
      </Card>
      <Card className="absolute right-[14rem] top-[30rem] w-[340px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="flex flex-col">
            <CardTitle className="text-lg text-center">Vehiculos para inspección y reparación.</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <h1 className='text-lg font-bold text-center'>1</h1>
        </CardContent>
      </Card>
      <img src={HomeLogo} alt="vadmin logo" className="w-[40rem] h-30" />
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>{t('labels.home_description_1')}</h1>
      <h6 className='text-lg font-medium text-gray-600'>{t('labels.home_description_2')}</h6>
    </div>
  );
}

export default Home;
