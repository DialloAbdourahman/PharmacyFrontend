import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const ProtectSystemAdmin = ({ children }) => {
  const { user } = useAuthContext();
  const prevRoute = useLocation();

  if (!user.email) {
    return <Navigate to={'/login'} replace state={{ prevRoute }} />;
  }

  if (user.title !== 'systemAdmin') {
    return <Navigate to={'/unauthorized'} replace />;
  }

  return children;
};

export default ProtectSystemAdmin;
