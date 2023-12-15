import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalContext';
import {
  CLOSE_SYSTEM_ADMIN_SIDEBAR,
  OPEN_SYSTEM_ADMIN_SIDEBAR,
} from '../../utils/actions';

const SystemAdminDashboardLeft = () => {
  const { systemAdminSidebar, dispatch } = useGlobalContext();

  return (
    <Wrapper
      style={{
        width: `${systemAdminSidebar ? '20%' : '5%'}`,
        borderRadius: `${systemAdminSidebar ? '0 50px 50px 0px' : '0'}`,
        borderRight: `${
          systemAdminSidebar ? '1px solid rgba(0, 0, 0, 0.07)' : '0'
        }`,
      }}
    >
      <div
        className='left'
        style={{ width: `${systemAdminSidebar ? '20%' : '100%'}` }}
      >
        {systemAdminSidebar && (
          <button
            onClick={() => dispatch({ type: CLOSE_SYSTEM_ADMIN_SIDEBAR })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                d='M14.25 7H9.75C9.33438 7 9 6.66563 9 6.25V1.75C9 1.44687 9.18125 1.17188 9.4625 1.05625C9.74375 0.940625 10.0656 1.00312 10.2812 1.21875L11.5312 2.46875L13.8219 0.178125C13.9375 0.0625 14.0906 0 14.25 0C14.4094 0 14.5625 0.0625 14.6781 0.178125L15.825 1.325C15.9375 1.4375 16 1.59063 16 1.75C16 1.90937 15.9375 2.0625 15.8219 2.17812L13.5312 4.46875L14.7812 5.71875C14.9969 5.93437 15.0594 6.25625 14.9438 6.5375C14.8281 6.81875 14.5531 7 14.25 7ZM14.25 9C14.5531 9 14.8281 9.18125 14.9438 9.4625C15.0594 9.74375 14.9969 10.0656 14.7812 10.2812L13.5312 11.5312L15.825 13.825C15.9375 13.9375 16.0031 14.0906 16.0031 14.2531C16.0031 14.4156 15.9406 14.5656 15.825 14.6812L14.6781 15.8281C14.5625 15.9375 14.4094 16 14.25 16C14.0906 16 13.9375 15.9375 13.8219 15.8219L11.5312 13.5312L10.2812 14.7812C10.0656 14.9969 9.74375 15.0594 9.4625 14.9438C9.18125 14.8281 9 14.5531 9 14.25V9.75C9 9.33438 9.33438 9 9.75 9H14.25ZM6.25 9C6.66563 9 7 9.33438 7 9.75V14.25C7 14.5531 6.81875 14.8281 6.5375 14.9438C6.25625 15.0594 5.93437 14.9969 5.71875 14.7812L4.46875 13.5312L2.17812 15.8219C2.0625 15.9375 1.90937 16 1.75 16C1.59063 16 1.4375 15.9375 1.32187 15.8219L0.178125 14.6781C0.0625 14.5625 0 14.4094 0 14.25C0 14.0906 0.0625 13.9375 0.178125 13.8219L2.46875 11.5312L1.21875 10.2812C1.00312 10.0656 0.940625 9.74375 1.05625 9.4625C1.17188 9.18125 1.44687 9 1.75 9H6.25ZM1.75 7C1.44687 7 1.17188 6.81875 1.05625 6.5375C0.940625 6.25625 1.00312 5.93437 1.21875 5.71875L2.46875 4.46875L0.178125 2.17812C0.0625 2.0625 0 1.90937 0 1.75C0 1.59063 0.0625 1.4375 0.178125 1.32187L1.32187 0.178125C1.4375 0.0625 1.59063 0 1.75 0C1.90937 0 2.0625 0.0625 2.17812 0.178125L4.46875 2.46875L5.71875 1.21875C5.93437 1.00312 6.25625 0.940625 6.5375 1.05625C6.81875 1.17188 7 1.44687 7 1.75V6.25C7 6.66563 6.66563 7 6.25 7H1.75Z'
                fill='#097394'
              />
            </svg>
          </button>
        )}
        <button onClick={() => dispatch({ type: OPEN_SYSTEM_ADMIN_SIDEBAR })}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 29 29'
            fill='none'
          >
            <path
              d='M12.692 0L10.884 4.30299C10.5224 4.41147 10.197 4.59227 9.87157 4.77307L5.56858 2.96509L2.96509 5.56858L4.77307 9.87157C4.59227 10.2332 4.44763 10.5224 4.30299 10.884L0 12.692V16.308L4.30299 18.116C4.44763 18.4776 4.59227 18.7668 4.77307 19.1284L2.96509 23.4314L5.56858 26.0349L9.87157 24.2269C10.197 24.3716 10.5224 24.5524 10.884 24.697L12.692 29H16.308L18.116 24.697C18.4414 24.5524 18.803 24.4077 19.1284 24.2269L23.4314 26.0349L26.0349 23.4314L24.2269 19.1284C24.3716 18.803 24.5524 18.4414 24.697 18.116L29 16.308V12.692L24.697 10.884C24.5885 10.5586 24.4077 10.197 24.2269 9.87157L26.0349 5.56858L23.4314 2.96509L19.1284 4.77307C18.803 4.62843 18.4414 4.44763 18.116 4.30299L16.308 0L12.692 0ZM14.5 9.0399C17.5012 9.0399 19.9239 11.4626 19.9239 14.4638C19.9239 17.4651 17.5012 19.8878 14.5 19.8878C11.4988 19.8878 9.07606 17.4651 9.07606 14.4638C9.07606 11.4626 11.4988 9.0399 14.5 9.0399Z'
              fill='#097394'
            />
          </svg>
        </button>
        {systemAdminSidebar && (
          <Link to={'/systemAdmin/pharmacies'}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              viewBox='0 0 31 31'
              fill='none'
            >
              <path
                d='M15.5 0C6.975 0 0 6.975 0 15.5C0 24.025 6.975 31 15.5 31C24.025 31 31 24.025 31 15.5C31 6.975 24.025 0 15.5 0ZM15.5 3.875C21.9325 3.875 27.125 9.0675 27.125 15.5C27.125 21.9325 21.9325 27.125 15.5 27.125C9.0675 27.125 3.875 21.9325 3.875 15.5C3.875 9.0675 9.0675 3.875 15.5 3.875ZM15.5 7.75C14.415 7.75 13.5625 8.6025 13.5625 9.6875C13.5625 10.7725 14.415 11.625 15.5 11.625C16.585 11.625 17.4375 10.7725 17.4375 9.6875C17.4375 8.6025 16.585 7.75 15.5 7.75ZM9.0675 11.625C8.74666 11.728 8.45824 11.9129 8.2307 12.1615C8.00317 12.41 7.84439 12.7136 7.77005 13.0423C7.69571 13.371 7.70837 13.7133 7.80679 14.0356C7.90521 14.3579 8.08598 14.6489 8.33125 14.88L11.8575 18.4062C11.78 18.7162 11.625 19.0263 11.625 19.375C11.625 21.5063 13.3687 23.25 15.5 23.25C17.6313 23.25 19.375 21.5063 19.375 19.375C19.375 17.2437 17.6313 15.5 15.5 15.5C15.1512 15.5 14.8413 15.655 14.5312 15.7325L11.005 12.2063C10.793 11.9716 10.5268 11.7924 10.2296 11.6844C9.93235 11.5763 9.61321 11.5426 9.3 11.5863C9.22257 11.5816 9.14493 11.5816 9.0675 11.5863V11.625ZM21.3125 11.625C20.2275 11.625 19.375 12.4775 19.375 13.5625C19.375 14.6475 20.2275 15.5 21.3125 15.5C22.3975 15.5 23.25 14.6475 23.25 13.5625C23.25 12.4775 22.3975 11.625 21.3125 11.625Z'
                fill='#097394'
              />
            </svg>
          </Link>
        )}
      </div>
      <div
        className='links'
        style={{ width: `${systemAdminSidebar ? '100%' : '0'}` }}
      >
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
        </NavLink>
        {/* <div
          className='test'
          style={{
            background: 'red',
            display: 'grid',
            gridTemplateColumns: '0% 0% 100%',
            justifyContent: 'space-between',
          }}
        >
          <p style={{ background: 'blue' }}>one</p>
          <p style={{ background: 'pink' }}>two</p>
          <p style={{ background: 'green', paddingLeft: '20px' }}>three</p>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default SystemAdminDashboardLeft;

const Wrapper = styled.section`
  overflow: hidden;
  display: flex;
  margin-right: 10px;

  .left {
    background: rgba(0, 0, 0, 0.07);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .left a,
  .left button {
    display: block;
    margin-bottom: 30px;
    padding-bottom: 5px;
    transition: transform 0.2s linear;
    border: none;
    background-color: transparent;
  }

  .left a:first-child,
  .left button:first-child {
    border-bottom: 2px solid #097394;
  }

  .left a:hover svg,
  .left button:hover svg {
    transform: scale(-91%);
  }

  .links {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
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
