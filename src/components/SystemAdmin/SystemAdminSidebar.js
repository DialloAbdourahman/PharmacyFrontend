import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { OPEN_ADDITIONAL_ADMIN_SIDEBAR } from '../../utils/actions';

const SystemAdminSidebar = () => {
  const { adminSidebar, dispatch } = useGlobalContext();

  return (
    <Wrapper adminSidebar={adminSidebar}>
      {!adminSidebar.additionalSidebar && (
        <button
          onClick={() => dispatch({ type: OPEN_ADDITIONAL_ADMIN_SIDEBAR })}
          className='setting-icon'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='29'
            height='29'
            viewBox='0 0 29 29'
            fill='none'
          >
            <path
              d='M12.692 0L10.884 4.30299C10.5224 4.41147 10.197 4.59227 9.87157 4.77307L5.56858 2.96509L2.96509 5.56858L4.77307 9.87157C4.59227 10.2332 4.44763 10.5224 4.30299 10.884L0 12.692V16.308L4.30299 18.116C4.44763 18.4776 4.59227 18.7668 4.77307 19.1284L2.96509 23.4314L5.56858 26.0349L9.87157 24.2269C10.197 24.3716 10.5224 24.5524 10.884 24.697L12.692 29H16.308L18.116 24.697C18.4414 24.5524 18.803 24.4077 19.1284 24.2269L23.4314 26.0349L26.0349 23.4314L24.2269 19.1284C24.3716 18.803 24.5524 18.4414 24.697 18.116L29 16.308V12.692L24.697 10.884C24.5885 10.5586 24.4077 10.197 24.2269 9.87157L26.0349 5.56858L23.4314 2.96509L19.1284 4.77307C18.803 4.62843 18.4414 4.44763 18.116 4.30299L16.308 0L12.692 0ZM14.5 9.0399C17.5012 9.0399 19.9239 11.4626 19.9239 14.4638C19.9239 17.4651 17.5012 19.8878 14.5 19.8878C11.4988 19.8878 9.07606 17.4651 9.07606 14.4638C9.07606 11.4626 11.4988 9.0399 14.5 9.0399Z'
              fill='#097394'
            />
          </svg>
        </button>
      )}
      <div className='links'>
        <h1>System Admin</h1>
        <NavLink
          to={'pharmacies'}
          className={({ isActive }) => (isActive ? 'link active-link' : 'link')}
        >
          <div className='left-link'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='19'
              height='15'
              viewBox='0 0 19 15'
              fill='none'
            >
              <path
                d='M16.625 3.75H11.875V2.5H16.625V3.75ZM1.78125 0C0.797852 0 0 0.839844 0 1.875V4.375C0 5.41016 0.797852 6.25 1.78125 6.25H17.2188C18.2021 6.25 19 5.41016 19 4.375V1.875C19 0.839844 18.2021 0 17.2188 0H1.78125ZM16.625 11.25V12.5H7.125V11.25H16.625ZM1.78125 8.75C0.797852 8.75 0 9.58984 0 10.625V13.125C0 14.1602 0.797852 15 1.78125 15H17.2188C18.2021 15 19 14.1602 19 13.125V10.625C19 9.58984 18.2021 8.75 17.2188 8.75H1.78125Z'
                fill='#FF9100'
              />
            </svg>
            Pharmacies
          </div>
          <div className='icons'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='9'
              height='13'
              viewBox='0 0 9 13'
              fill='none'
            >
              <path
                d='M2.59375 0.65625L0.34375 2.90625L4.09375 6.65625L0.34375 10.4062L2.59375 12.6562L8.59375 6.65625L2.59375 0.65625Z'
                fill='#097394'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='10'
              viewBox='0 0 13 10'
              fill='none'
            >
              <path
                d='M12.125 3.125L9.875 0.875L6.125 4.625L2.375 0.875L0.125 3.125L6.125 9.125L12.125 3.125Z'
                fill='white'
              />
            </svg>
          </div>
        </NavLink>
        <NavLink
          to={'drugs'}
          className={({ isActive }) => (isActive ? 'link active-link' : 'link')}
        >
          <div className='left-link'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
            >
              <path
                d='M0 0V5H5V0H0ZM7.5 0V5H12.5V0H7.5ZM15 0V5H20V0H15ZM0 7.5V12.5H5V7.5H0ZM7.5 7.5V12.5H12.5V7.5H7.5ZM15 7.5V12.5H20V7.5H15ZM0 15V20H5V15H0ZM7.5 15V20H12.5V15H7.5ZM15 15V20H20V15H15Z'
                fill='#FF9100'
              />
            </svg>
            Products
          </div>
          <div className='icons'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='9'
              height='13'
              viewBox='0 0 9 13'
              fill='none'
            >
              <path
                d='M2.59375 0.65625L0.34375 2.90625L4.09375 6.65625L0.34375 10.4062L2.59375 12.6562L8.59375 6.65625L2.59375 0.65625Z'
                fill='#097394'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='10'
              viewBox='0 0 13 10'
              fill='none'
            >
              <path
                d='M12.125 3.125L9.875 0.875L6.125 4.625L2.375 0.875L0.125 3.125L6.125 9.125L12.125 3.125Z'
                fill='white'
              />
            </svg>
          </div>
        </NavLink>
        {/* git push origin <branchname> */}
        {/* git pull origin <branchname> */}
      </div>
    </Wrapper>
  );
};

export default SystemAdminSidebar;

const Wrapper = styled.section`
  border-right: 1px solid rgba(30, 135, 169, 0.1);
  border-radius: 0 50px 50px 0px;
  ${(props) => !props.adminSidebar.sidebar && 'visibility:hidden;'}

  .setting-icon {
    border: none;
    padding: 20px;
  }

  .setting-icon:hover svg,
  button:hover svg {
    transform: scale(-91%);
  }

  .active-link .icons svg:last-child {
    margin-right: 13px;
  }

  .links {
    display: flex;
    flex-direction: column;
    ${(props) =>
      props.adminSidebar.additionalSidebar
        ? 'padding: 20px 10px;'
        : 'padding: 20px;'}
    overflow: hidden;
  }

  .links h1 {
    color: var(--SecondMainColor, #ff9100);
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 60px;
    border-bottom: 3px solid var(--SecondMainColor, #ff9100);
    font-size: 30px;
    padding-bottom: 10px;
  }

  .link {
    padding: 10px 0;
    margin-bottom: 20px;
    color: var(--MainColor1, #097394);
    font-size: 17px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  .link:hover {
    color: #ff9100;
  }

  .link .left-link svg {
    margin-right: 10px;
  }

  .active-link {
    font-weight: bold;
    color: white;
    background: var(--MainColor1, #097394);
    border-left: 5px solid var(--SecondMainColor, #ff9100);
  }

  .active-link:hover {
    color: white;
  }

  .active-link .left-link svg {
    margin-left: 10px;
  }
`;
