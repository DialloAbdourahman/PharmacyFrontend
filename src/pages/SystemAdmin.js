import React from 'react';
import styled from 'styled-components';
import SystemAdminSidebar from '../components/SystemAdmin/SystemAdminSidebar';
import { Outlet } from 'react-router-dom';
import SystemAdminAdditionalSidebar from '../components/SystemAdmin/SystemAdminAdditionalSidebar';
import { useGlobalContext } from '../contexts/GlobalContext';
import { CLOSE_ADMIN_SIDEBAR, OPEN_ADMIN_SIDEBAR } from '../utils/actions';

const SystemAdmin = () => {
  const { adminSidebar, dispatch } = useGlobalContext();

  return (
    <Wrapper adminSidebar={adminSidebar}>
      <SystemAdminAdditionalSidebar />
      <SystemAdminSidebar />
      <div className='content'>
        {adminSidebar.sidebar && (
          <button
            className='toggle'
            onClick={() => dispatch({ type: CLOSE_ADMIN_SIDEBAR })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 21 19'
              fill='none'
            >
              <path
                d='M0 0V2.625H21V0H0ZM0 7.79625V10.4213H21V7.79625H0ZM0 15.6713V18.2963H21V15.6713H0Z'
                fill='#FF9100'
              />
            </svg>
          </button>
        )}
        {!adminSidebar.sidebar && (
          <button
            className='toggle'
            onClick={() => dispatch({ type: OPEN_ADMIN_SIDEBAR })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 21 19'
              fill='none'
            >
              <path
                d='M0 0V2.625H21V0H0ZM0 7.79625V10.4213H21V7.79625H0ZM0 15.6713V18.2963H21V15.6713H0Z'
                fill='#FF9100'
              />
            </svg>
          </button>
        )}
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default SystemAdmin;

const Wrapper = styled.section`
  display: grid;
  transition: grid 0.2s linear;
  ${(props) =>
    props.adminSidebar.sidebar &&
    props.adminSidebar.additionalSidebar &&
    'grid-template-columns: 5% 15% 80%;'};
  ${(props) =>
    !props.adminSidebar.sidebar && 'grid-template-columns: 0% 0% 100%;'};
  ${(props) =>
    props.adminSidebar.sidebar &&
    !props.adminSidebar.additionalSidebar &&
    'grid-template-columns: 0% 20% 80%;'};
  justify-content: space-between;
  min-height: 100vh;

  .content {
    display: flex;
    align-items: flex-start;
    ${(props) =>
      props.adminSidebar.sidebar ? 'margin: 20px;' : 'margin: 40px;'};
  }

  .content .toggle {
    ${(props) =>
      props.adminSidebar.sidebar
        ? 'margin-right: 30px;'
        : 'margin-right: 50px;'};
    background: transparent;
    border: none;
  }

  .content .toggle:hover svg {
    transform: scale(-91%);
  }

  .content section {
    flex-grow: 1;
    margin-top: 30px;
  }
`;
