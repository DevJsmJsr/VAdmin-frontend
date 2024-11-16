import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import HeaderLanding from './HeaderLanding/HeaderLanding';

const LandingPage = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <HeaderLanding/>
    </>
  );
}

export default LandingPage;
