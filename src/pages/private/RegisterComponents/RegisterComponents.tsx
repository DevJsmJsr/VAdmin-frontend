
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useAppStorage } from '~store/useStore';

const RegisterComponents = () => {
  const { t } = useTranslation();
  const { isDoingRequest } = useAppStorage.getState();

  const { state: vehicle } = useLocation();

  return (
    <div>
    </div>
  );
}

export default RegisterComponents;
