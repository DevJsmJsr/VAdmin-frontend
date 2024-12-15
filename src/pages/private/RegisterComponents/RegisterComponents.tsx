
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Separator } from '~components/ui/separator';
import { useAppStorage } from '~store/useStore';

const RegisterComponents = () => {
  const { t } = useTranslation();
  const { isDoingRequest } = useAppStorage.getState();

  const { state: vehicle } = useLocation();

  return (
    <div>
      <Separator title='titulo' subtitle='parrafo'/>
    </div>
  );
}

export default RegisterComponents;
