import { Navigate } from 'react-router-dom';

import { ErrorBoundaryFront } from '~components/index';
import { ROUTES } from '~constants/index';
import { useLocalStorage } from '~hooks/index';
import type { Module } from '~types/CommonTypes';
import ModuleWrapper from './ModuleWrapper/ModuleWrapper';

interface Props extends React.PropsWithChildren {
  module: Module;
}

const PrivateRoute = ({ module, children }: Props) => {
  const { userData } = useLocalStorage();
  return (
    <>
      {Object.entries(userData).length > 0 ? (
        <ModuleWrapper data={module}>{children}</ModuleWrapper>
      ) : (
        <Navigate to={ROUTES.ROOT} />
      )}
    </>
  );
};

export default PrivateRoute;
