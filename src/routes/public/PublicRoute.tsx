import { Navigate } from 'react-router-dom';

import { ROUTES } from '~constants/index';
import { useLocalStorage } from '~hooks/index';

const PublicRoute = ({ children }: React.PropsWithChildren) => {
  const { userData } = useLocalStorage();

  return (
    <>
      {Object.keys(userData).length > 0 ? (
        <Navigate to={ROUTES.PLATFORM} />
      ) : (
        children
      )}
    </>
  );
};

export default PublicRoute;
