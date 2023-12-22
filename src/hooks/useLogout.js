import React from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { UNSET_USER, START_LOADING, STOP_LOADING } from '../utils/actions';

const useLogout = () => {
  const { user, dispatch, axiosPrivate } = useAuthContext();
  const { dispatch: dispatchGlobal } = useGlobalContext();

  const navigate = useNavigate();

  const logout = async () => {
    try {
      dispatchGlobal({ type: START_LOADING });
      const { data } = await axiosPrivate.post(`/${user.title}/logout`, {});
      localStorage.removeItem('info');
      dispatch({ type: UNSET_USER });
      navigate('/login');
    } catch (error) {
      console.log(error);
    } finally {
      dispatchGlobal({ type: STOP_LOADING });
    }
  };
  return { logout };
};

export default useLogout;
