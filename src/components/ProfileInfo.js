import React, { useEffect } from 'react';
import styled from 'styled-components';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import { useAuthContext } from '../contexts/AuthContext';
import useLogout from '../hooks/useLogout';
import { useGlobalContext } from '../contexts/GlobalContext';
import { BLUR_BG, SHOW_UPDATE_PROFILE, UNBLUR_BG } from '../utils/actions';

// import { createGlobalStyle } from 'styled-components';
// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: red;
//     position:absolute;
//     top:0;
//     bottom:0;
//     left:0;
//     right:0;
//     z-index:100000;
//   }
// `;

const ProfileInfo = ({ setShowProfile }) => {
  const { user } = useAuthContext();
  const { dispatch } = useGlobalContext();
  const { logout } = useLogout();

  useEffect(() => {
    dispatch({ type: BLUR_BG });
  }, []);

  return (
    <Wrapper>
      <div className='top'>
        <h2>Account</h2>
        <button
          className='close'
          onClick={() => {
            setShowProfile(false);
            dispatch({ type: UNBLUR_BG });
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='21'
            height='21'
            viewBox='0 0 21 21'
            fill='none'
          >
            <path
              d='M10.5 0C4.69875 0 0 4.69875 0 10.5C0 16.3013 4.69875 21 10.5 21C16.3013 21 21 16.3013 21 10.5C21 4.69875 16.3013 0 10.5 0ZM5.6175 5.6175C6.13941 5.09559 6.98559 5.09559 7.5075 5.6175L8.53125 6.64125C9.61856 7.72856 11.3814 7.72856 12.4688 6.64125L13.4925 5.6175C14.0144 5.09559 14.8606 5.09559 15.3825 5.6175C15.9044 6.13941 15.9044 6.98559 15.3825 7.5075L14.3587 8.53125C13.2714 9.61856 13.2714 11.3814 14.3587 12.4688L15.3825 13.4925C15.9044 14.0144 15.9044 14.8606 15.3825 15.3825C14.8606 15.9044 14.0144 15.9044 13.4925 15.3825L12.4688 14.3587C11.3814 13.2714 9.61856 13.2714 8.53125 14.3587L7.5075 15.3825C6.98559 15.9044 6.13941 15.9044 5.6175 15.3825C5.09559 14.8606 5.09559 14.0144 5.6175 13.4925L6.64125 12.4688C7.72856 11.3814 7.72856 9.61856 6.64125 8.53125L5.6175 7.5075C5.09559 6.98559 5.09559 6.13941 5.6175 5.6175Z'
              fill='#097394'
            />
          </svg>
        </button>
      </div>
      <div className='middle'>
        <Person2RoundedIcon />
        <div className='info'>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>
            {user.title === 'systemAdmin' && 'System Admin'}
            {user.title === 'pharmacyAdmin' && 'Pharmacy Admin'}
            {user.title === 'cachier' && 'Cashier'}
            {user.title === 'customer' && 'Customer'}
          </p>
        </div>
      </div>
      <div className='bottom'>
        <button
          className='logout-btn'
          onClick={() => {
            logout();
            dispatch({ type: UNBLUR_BG });
          }}
        >
          Logout
        </button>
        <button
          className='edit-btn'
          onClick={() => dispatch({ type: SHOW_UPDATE_PROFILE })}
        >
          Edit
        </button>
      </div>
    </Wrapper>
  );
};

export default ProfileInfo;

const Wrapper = styled.article`
  position: absolute;
  right: -20px;
  top: 120%;
  width: 30%;
  border-radius: 9px;
  background: var(--white, #fff);
  z-index: 1000000000;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 7px solid var(--MainColor1, #097394);
    border-bottom: 1px solid var(--MainColor1, #097394);
    border-right: 1px solid var(--MainColor1, #097394);
    border-radius: 9px 9px 0px 0px;
    padding: 15px 10px;
    width: 100%;
    color: var(--SearchTextColor, #b8b6b6);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .top button {
    margin-top: -20px;
  }

  .middle,
  .bottom {
    padding: 25px 30px;
  }

  .middle {
    display: flex;
    align-items: center;
  }

  .middle svg {
    width: 60px;
    height: 60px;
    color: var(--MainColor1, #097394);
    border: 1px solid var(--MainColor1, #097394);
    border-radius: 50%;
    margin-right: 20px;
  }

  .middle p {
    margin-bottom: 15px;
  }

  button {
    margin: 0;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottom .logout-btn {
    color: var(--MainColor1, #097394);
    font-size: 17px;
  }

  .bottom .edit-btn {
    border: 1px solid var(--SearchTextColor, #b8b6b6);
    font-size: 16px;
    padding: 5px 20px;
    border-radius: 8px;
  }
`;
