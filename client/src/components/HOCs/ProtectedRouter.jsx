import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRouter({ isAllowed, redirectTo }) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return <Outlet />;
}

export default ProtectedRouter;
