import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import Loading from '../Loading';

const ProtectPharmacyAdmin = ({ children }) => {
  const { user, refreshTokenLoading } = useAuthContext();

  if (refreshTokenLoading && !user.email) {
    return <Loading />;
  }

  if (!user.email) {
    return <Navigate to={'/login'} replace />;
  }

  if (user.title !== 'pharmacyAdmin') {
    return <Navigate to={'/unauthorized'} replace />;
  }

  return children;
};

export default ProtectPharmacyAdmin;
